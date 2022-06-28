import * as S from './styles'
import { faChess, faBookOpenReader, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../../elements/forms/Button'
import Select from '../../elements/forms/Select'
import SelectGameCard from '../../elements/SelectGameCard'

import { useDispatch } from 'react-redux'
import { setModule, setActiveGame, setQuestions, setCurrentQuestion, clearQuestions, clearSelectedQuestions } from '../../../redux/singlePlayerGame'

import { ModalContext } from '../../../context/ModalContext';

import GET_MODULES from '../../../apollo/queries/getModules'
import GET_RANDOM_QUESTIONS_FOR_MODULE from "../../../apollo/queries/getRandomQuestionsForModule";
import { useQuery } from "@apollo/client"

const NewGameModal = () => {
    //Redux
    const dispatch = useDispatch()

    //Modal
    const { setOpen } = useContext(ModalContext)

    //Konfigurationen werden angepasst an den Modus angezeigt
    const [modus, setModus] = useState('')
    //const [link] = useState(`/${modus}`)

    //Selektiertes Modul
    const [selectedModul, setSelectedModul] = useState('')
    const [selectedFriend] = useState('')

    //getMyProfile Query
    const { data } = useQuery(GET_MODULES); 
  
    const generateModuleOptions = () => {
        if (data) {
            const generatedModules = data.getModules.map(item => {
                const container = {};
                container.label = item.name;
                container.value = item.uuid
            
                return container;
            })
            return generatedModules
        }
    }

    //getAllQuestionsQuery
    const { data: questionData, refetch } = useQuery(GET_RANDOM_QUESTIONS_FOR_MODULE, {
        variables: {
            filter: {
                module_uuid: selectedModul,
                amount: 10
            }
        }
    });

    //Select
    const selectHandler = (event) => {
        const value = event.value
        setSelectedModul(value)
        refetch({filter: {module_uuid: selectedModul, amount: 10}})
    }

    //Spiel Starten Button Handler
    const handleButton = () => {
        if (modus === "einzelspieler") {
            
            //updated ausgewähltes Modul für den Spielmodus
            dispatch(setModule(selectedModul.value))

            dispatch(clearQuestions())
            dispatch(clearSelectedQuestions())
            //wählt random Fragen für die Runde aus
            dispatch(setQuestions(questionData.getRandomQuestionsForModule))

            //setzt aktuelle Frage auf die erste
            dispatch(setCurrentQuestion(0))

            //setzt acitveGame auf active
            dispatch(setActiveGame(true))

            //schließt modal
            setOpen(false)
        } else if (modus === "duell") {
            setOpen(false)
        }
    }

    return (
        <S.NewGameModal>
            <S.GameModeSelection>
                <SelectGameCard 
                    onClick={() => setModus('einzelspieler')}
                    selected={modus === 'einzelspieler' ? true : false}
                    icon={faBookOpenReader} 
                    title="Einzelspieler Modus"
                    text="Du erhälst 10 Fragen im Multiple-Choice Format, um dich auf ein bestimmtes Modul vorzubereiten."
                />
                <SelectGameCard 
                    onClick={() => setModus('duell')}
                    selected={modus === 'duell' ? true : false}
                    icon={faChess} 
                    title="Duell Modus"
                    text="In vier Runden mit je drei Fragen kannst du gegen einen deiner Lernpartner antreten."
                />
                <SelectGameCard 
                    onClick={() => setModus('collab')}
                    selected={modus === 'collab' ? true : false}
                    icon={faUserGroup} 
                    title="Kollaborativer Modus"
                    text="Spiele mit deinem Lernpartner zusammen und wählt euch gegenseitig Fragen aus."
                />
            </S.GameModeSelection>
            <S.Selection>
                {modus === "einzelspieler" &&
                    <S.SelectionContainer>
                        <label>Modul auswählen</label>
                        <Select 
                            defaultValue={selectedModul}
                            onChange={selectHandler}
                            options={generateModuleOptions()}
                            placeholder="Modul"
                        />
                    </S.SelectionContainer>
                }
                {modus === "duell" &&
                    <S.DuellSelect>
                        <S.SelectionContainer>
                            <label>Modul auswählen</label>
                            <Select 
                                defaultValue={selectedModul}
                                onChange={setSelectedModul}
                                options={generateModuleOptions()}
                                placeholder="Modul"
                            />
                        </S.SelectionContainer>
                        <S.SelectionContainer>
                            <label>Lernpartner auswählen</label>
                            <Select placeholder="Lernpartner" options={generateModuleOptions()}/>
                        </S.SelectionContainer>
                    </S.DuellSelect>
                }
                {modus === "collab" &&
                    <S.CollabSelect>
                        <p>Der kollaborative Spielmodus wird von der Prototyp Version nicht unterstützt!</p>
                    </S.CollabSelect>
                }
            </S.Selection>
            {(modus === "einzelspieler" && selectedModul !== '') &&
                    <NavLink to={"/einzelspieler"}>
                        <Button label="Spiel Starten" onClick={() => {handleButton()}}/>
                    </NavLink>
            }
            {(modus === "duell" && selectedModul !== '' && selectedFriend !== '') &&
                    <NavLink to={"/duell"}>
                        <Button label="Spiel Starten" onClick={() => {handleButton()}} />
                    </NavLink>
            }
        </S.NewGameModal>
    )
}

export default NewGameModal
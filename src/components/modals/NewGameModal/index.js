import * as S from './styles'
import { faChess, faBookOpenReader, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'

import Button from '../../elements/forms/Button'
import Select from '../../elements/forms/Select'
import SelectGameCard from '../../elements/SelectGameCard'

import { useDispatch } from 'react-redux'
import { setModule, setActiveGame, setQuestions, setCurrentQuestion, clearQuestions, clearSelectedQuestions } from '../../../redux/singlePlayerGame'
import { useNavigate } from 'react-router-dom';

import { ModalContext } from '../../../context/ModalContext';

import GET_MODULES from '../../../apollo/queries/getModules'
import GET_RANDOM_QUESTIONS_FOR_MODULE from "../../../apollo/queries/getRandomQuestionsForModule";
import GET_MY_PROFILE from '../../../apollo/queries/getMyProfile'
import { useQuery, useMutation } from "@apollo/client"
import START_GAME from '../../../apollo/mutations/startGame'

const NewGameModal = () => {
    //Redux
    const dispatch = useDispatch()

    //navigate
    let navigate = useNavigate()

    //Modal
    const { setOpen } = useContext(ModalContext)

    //Konfigurationen werden angepasst an den Modus angezeigt
    const [modus, setModus] = useState('')
    //const [link] = useState(`/${modus}`)

    //Selektiertes Modul
    const [selectedModul, setSelectedModul] = useState('')
    const [selectedFriend, setSelectedFriend] = useState('')

    //getModules Query
    const { data } = useQuery(GET_MODULES); 

    //getProfileData Query
    const { data : profile } = useQuery(GET_MY_PROFILE); 

    //startGame Mutation
    const [startGame] = useMutation(START_GAME, {
        onCompleted(data) {
            //sets activeGame to new game id 
            localStorage.setItem("activeGame", data.startGame.game.uuid)
        }
    })
  
    //generated list of modules for modul select
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
    //generate list of friends for lernpartner select
    const generateFriendOptions = () => {
        if (data) {
            const generatedModules = profile.getMyProfile.friends.map(item => {
                const container = {};
                const fullName = `${item.first_name} ${item.last_name}`
                container.label = fullName
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

    //button handler start game
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
            navigate("/einzelspieler")

        } else if (modus === "duell") {
            startGame({ 
                variables: { 
                    startGameInput: {
                        user_uuid: selectedFriend.value,
                        module_uuid: selectedModul.value
                    }
                } 
            })


            //closes modal
            setOpen(false)
            navigate("/duell")
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
                            <Select 
                                defaultValue={selectedFriend}
                                onChange={setSelectedFriend} 
                                placeholder="Lernpartner" 
                                options={generateFriendOptions()}
                            />
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
                <Button label="Spiel Starten" onClick={() => {handleButton()}}/>
            }
            {(modus === "duell" && selectedModul !== '' && selectedFriend !== '') &&
                <Button label="Spiel Starten" onClick={() => {handleButton()}} />
            }
        </S.NewGameModal>
    )
}

export default NewGameModal
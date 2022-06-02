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

    //Placeholder Module
    const modulOptions = [
        { value: 'Betriebssysteme, Rechennetze und verteilte Systeme', label: 'Betriebssysteme, Rechennetze und verteilte Systeme' },
        { value: 'Statistik', label: 'Statistik' },
        { value: 'Spezifikation', label: 'Spezifikation' }
    ]

    //Placeholder Questions
    const randomQuestions = [
        { 
            id: 0,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A",
            selectedAnswer: null
        },
        {
            id: 1,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            correctAnswer: "D",
            selectedAnswer: null
        },
        {
            id: 2,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            correctAnswer: "D",
            selectedAnswer: null
        },
        { 
            id: 3,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A",
            selectedAnswer: null
        },
        {
            id: 4,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            correctAnswer: "D",
            selectedAnswer: null
        },
        {
            id: 5,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            correctAnswer: "D",
            selectedAnswer: null
        },
        { 
            id: 6,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A",
            selectedAnswer: null
        },
        {
            id: 7,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            correctAnswer: "D",
            selectedAnswer: null
        },
        {
            id: 8,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            correctAnswer: "D",
            selectedAnswer: null
        },
        { 
            id: 9,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A",
            selectedAnswer: null
        }
    ]

    //Spiel Starten Button Handler
    const handleButton = () => {
        if (modus === "einzelspieler") {
            //updated ausgewähltes Modul für den Spielmodus
            dispatch(setModule(selectedModul.value))

            dispatch(clearQuestions())
            dispatch(clearSelectedQuestions())
            //wählt random Fragen für die Runde aus
            dispatch(setQuestions(randomQuestions))

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
                            onChange={setSelectedModul}
                            options={modulOptions}
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
                                options={modulOptions}
                            />
                        </S.SelectionContainer>
                        <S.SelectionContainer>
                            <label>Lernpartner auswählen</label>
                            <Select placeholder="Lernpartner" options={modulOptions}/>
                        </S.SelectionContainer>
                    </S.DuellSelect>
                }
                {modus === "collab" &&
                    <S.CollabSelect>
                        <S.SelectionContainer>
                            <label>Modul auswählen</label>
                            <Select 
                                defaultValue={selectedModul}
                                onChange={setSelectedModul}
                                options={modulOptions}
                            />
                        </S.SelectionContainer>
                        <S.SelectionContainer>
                            <label>Lernpartner auswählen</label>
                            <Select placeholder="Lernpartner" options={modulOptions} />
                        </S.SelectionContainer>
                    </S.CollabSelect>
                }
            </S.Selection>
            <NavLink to={modus ? `/${modus}` : "/"}>
                <Button label="Spiel Starten" onClick={() => {handleButton()}} />
            </NavLink>
        </S.NewGameModal>
    )
}

export default NewGameModal
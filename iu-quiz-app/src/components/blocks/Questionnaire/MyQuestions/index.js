import * as S from './styles'
import Button from '../../../elements/forms/Button'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle, faPen } from '@fortawesome/free-solid-svg-icons'

import useWindowDimensions from '../../../hooks/useWindowDimensions'

import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'

const MyQuestions = () => {

    //placeholder  data
    const myQuestions = [
        { 
            id: 0,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            module: "Statistik",
            correctAnswer: "A"
        },
        {
            id: 1,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            module: "Statistik",
            correctAnswer: "D"
        },
        {
            id: 2,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            module: "Statistik",
            correctAnswer: "D"
        },
        { 
            id: 3,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            module: "Statistik",
            correctAnswer: "A"
        },
        {
            id: 4,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            module: "Statistik",
            correctAnswer: "D"
        },
        {
            id: 5,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            module: "Statistik",
            correctAnswer: "D"
        },
        { 
            id: 6,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            module: "Statistik",
            correctAnswer: "A"
        },
        {
            id: 7,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            module: "Statistik",
            correctAnswer: "D"
        },
        {
            id: 8,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            module: "Statistik",
            correctAnswer: "D"
        },
        { 
            id: 9,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            module: "Statistik",
            correctAnswer: "A"
        }
    ]

    const [questionAmount] = useState(myQuestions.length)

    //Dimension für Responsive
    const { width } = useWindowDimensions();

    //Details Modal
    const { setOpen, setType} = useContext(ModalContext)
    const openDetails = () => {
        setType("QuestionDetails")
        setOpen(true)
    }

    //Frage löschen Modal
    const handleDeleteQuestionModal = () => {
        setType("DeleteQuestion")
        setOpen(true)
    }

    return (
        <S.MyQuestions>
            <p>{`${questionAmount} Fragen`}</p>
            {width > 800 ?
                <table>
                    <tbody>
                        <tr>
                            <th>Frage</th>
                            <th>Modul</th>
                            <th>Details</th>
                            <th>Bearbeiten</th>
                            <th>Frage entfernen</th>
                        </tr>
                        {myQuestions &&
                            myQuestions.map(({ question, module }, index) => {
                                return (
                                    <tr key={index}>
                                        <td><p>{question}</p></td>
                                        <td><h6>{module}</h6></td>
                                        <td>
                                            <Button size="small" label="Details" onClick={() => openDetails()} />
                                        </td>
                                        <td>
                                            <S.EditButton>
                                                <FontAwesomeIcon icon={faPen} />
                                            </S.EditButton>
                                        </td>
                                        <td>
                                            <S.DeleteButton onClick={() => handleDeleteQuestionModal()}>
                                                <FontAwesomeIcon icon={faXmarkCircle} />
                                            </S.DeleteButton>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            :
                <S.Responsive>
                    {myQuestions &&
                        myQuestions.map(({question, module}, index) => {
                            return(
                                <S.ResponsiveItem key={index}>
                                    <S.Question>
                                        <h5>Frage</h5>
                                        <p>{question}</p>
                                    </S.Question>
                                    <hr className="itemLine" />
                                    <S.Question>
                                        <h5>Modul</h5>
                                        <p>{module}</p>
                                    </S.Question>
                                    <hr className="itemLine" />
                                    <S.Question>
                                        <Button label="Details" size="small" />
                                    </S.Question>
                                    <hr className="itemLine" />
                                    <S.Options>
                                        <S.Option>
                                            <h6>Bearbeiten</h6>
                                            <S.EditButton>
                                                <FontAwesomeIcon icon={faPen} />
                                            </S.EditButton>
                                        </S.Option>
                                        <S.Option>
                                            <h6>Frage entfernen</h6>
                                            <S.DeleteButton onClick={() => handleDeleteQuestionModal()}>
                                                <FontAwesomeIcon icon={faXmarkCircle} />
                                            </S.DeleteButton>
                                        </S.Option>
                                    </S.Options>
                                    <hr/>
                                </S.ResponsiveItem >
                            )
                        })
                    }
                </S.Responsive>
            }
        </S.MyQuestions>
    )
}

export default MyQuestions
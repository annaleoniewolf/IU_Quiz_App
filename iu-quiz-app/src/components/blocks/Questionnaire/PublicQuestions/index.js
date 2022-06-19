import * as S from './styles'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../elements/forms/Button'
import Select from "../../../elements/forms/Select"
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { ModalContext } from '../../../../context/ModalContext'

const PublicQuestions = () => {

    //Details Modal
    const { setOpen, setType} = useContext(ModalContext)

    const openDetails = () => {
        setType("QuestionnairePublicQuestionDetails")
        setOpen(true)
    }

    //Dimension für Responsive
    const { width } = useWindowDimensions();

    //placeholder  data
    const publicQuestions = [
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
        }
    ]


    const [questionAmount] = useState(publicQuestions.length)

    //placeholder für select
    const modulOptions = [
        { value: 'Betriebssysteme, Rechennetze und verteilte Systeme', label: 'Betriebssysteme, Rechennetze und verteilte Systeme' },
        { value: 'Statistik', label: 'Statistik' },
        { value: 'Spezifikation', label: 'Spezifikation' }
      ]

    return (
        <S.PublicQuestions>
            <p>{`${questionAmount} Fragen`}</p>
            <S.Select>
                <label>Filtern nach Modul</label>
                <Select placeholder="Modul" options={modulOptions} />
            </S.Select>
            <S.Questions>
                {width > 800 ?
                    <table>
                        <tbody>
                            <tr>
                                <th>Frage</th>
                                <th>Modul</th>
                                <th>Details</th>
                                <th>Frage Melden</th>
                            </tr>
                            {publicQuestions &&
                                publicQuestions.map(({ question, module }, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><p>{question}</p></td>
                                            <td><h6>{module}</h6></td>
                                            <td>
                                                <Button size="small" label="Details" onClick={() => openDetails()}/>
                                            </td>
                                            <td>
                                                <S.BanButton>
                                                    <FontAwesomeIcon icon={faBan} />
                                                </S.BanButton>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                :
                    <S.Responsive>
                        {publicQuestions &&
                            publicQuestions.map(({question, module}, index) => {
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
                                        <S.Options>
                                            <S.Option>
                                                <h6>Details</h6>
                                                <Button size="small" label="Details" onClick={() => openDetails()}/>
                                            </S.Option>
                                            <S.Option>
                                                <h6>Frage melden</h6>
                                                <S.BanButton>
                                                    <FontAwesomeIcon icon={faBan} />
                                                </S.BanButton>
                                            </S.Option>
                                        </S.Options>
                                        <hr/>
                                    </S.ResponsiveItem >
                                )
                            })
                        }
                    </S.Responsive>
                }
            </S.Questions>
                <S.Buttons>
                    <Button label="Mehr laden" inactive/>
                </S.Buttons>
        </S.PublicQuestions>
    )
}

export default PublicQuestions
import * as S from './styles'

import Button from '../../elements/forms/Button'
import ProgressBar from '../../elements/ProgressBar'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown, faFaceSmileBeam, faSmileWink } from '@fortawesome/free-solid-svg-icons'

const QuestionRoundDuellModal = () => {


    const [selected, setSelected] = useState(null)
    const [currentQuestion] = useState(0)

    const [result] = useState(5)

    //weiter button handler
    const handleButton = () => {
  
        setSelected(null)
    }

    const questions = [
        { 
            id: 0,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A"
        },
        {
            id: 1,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            correctAnswer: "D"
        },
        {
            id: 2,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            correctAnswer: "D"
        },
        { 
            id: 3,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A"
        },
        {
            id: 4,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            correctAnswer: "D"
        },
        {
            id: 5,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            correctAnswer: "D"
        },
        { 
            id: 6,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A"
        },
        {
            id: 7,
            question: "Die Nullhypothese kann verworfen werden, wenn...",
            answerA: "der p-Wert genau dem Signifikanzniveau entspricht.",
            answerB: "der p-Wert genau dem kritischen Wert entspricht.",
            answerC: "der p-Wert größer ist als die Irrtumswahrscheinlichkeit.",
            answerD: "der p-Wert kleiner ist als die Irrtumswahrscheinlichkeit",
            correctAnswer: "D"
        },
        {
            id: 8,
            question: "Beim Fehler 1. Art...",
            answerA: "wird die Nullhypothese fälschlicherweise angenommen.",
            answerB: "wird die Alternativhypothese fälschlicherweise verworfen.",
            answerC: "wird die Alternativhypothese richtigerweise angenommen.",
            answerD: "wird die Nullhypothese fälschlicherweise abgelehnt.",
            correctAnswer: "D"
        },
        { 
            id: 9,
            question: "Ziel von statistischen Testverfahren ist es,...", 
            answerA: "...die Nullhypothese zu verwerfen",
            answerB: "...die Nullhypothese anzunehmen",
            answerC: "...die Alternativhypothese eindeutig zu beweisen",
            answerD: "...die Alternativhypothese zu verwerfen",
            correctAnswer: "A"
        }
    ]

    /*Zählt Ergebnispunkte zusammen
    const countPoints = () => {
        let count = 0
        for (let i = 0; i < questions.length; i++) {
            if (selectedQuestions[i] === questions[i].correctAnswer) {
                count++
            }
        }
        return count
    }*/

    return (
        <S.QuestionRoundDuellModal>
                {currentQuestion < 10 ?
                    <S.Content>
                        <S.Progress> {currentQuestion+1} / 10</S.Progress>
                        <S.ProgressBar>
                            <ProgressBar percentage={(currentQuestion+1)*10}/>
                        </S.ProgressBar>
                        <h4>{questions[currentQuestion].question}</h4>
                        <S.Answers>
                            <S.Answer selected={selected === 'A' ? true : false} onClick={() => setSelected('A')}>
                                <p>{questions[currentQuestion].answerA}</p>
                            </S.Answer>
                            <S.Answer selected={selected === 'B' ? true : false}  onClick={() => setSelected('B')}>
                                <p>{questions[currentQuestion].answerB}</p>
                            </S.Answer>
                            <S.Answer selected={selected === 'C' ? true : false}  onClick={() => setSelected('C')}>
                                <p>{questions[currentQuestion].answerC}</p>
                            </S.Answer>
                            <S.Answer selected={selected === 'D' ? true : false}  onClick={() => setSelected('D')}>
                                <p>{questions[currentQuestion].answerD}</p>
                            </S.Answer>
                        </S.Answers>
                        <Button label="Weiter" onClick={() => handleButton()} />
                    </S.Content>
                : 
                    <S.FeedbackContent>
                            {result <= 5 && 
                                <S.Feedback
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 5, type: 'spring' }}
                                >
                                    <S.SadFace>
                                        <FontAwesomeIcon icon={faFaceFrown} />
                                    </S.SadFace>
                                    <h5>Schade!</h5>
                                    <p>
                                        {`Du hattest leider nur ${result} / 10 Antworten richtig!`}
                                        <br /> 
                                        Am besten versuchst du es gleich noch mal!
                                    </p>
                                </S.Feedback>
                            }
                            {(result > 5 && result < 8) &&
                                <S.Feedback
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 5, type: 'spring' }}
                                >
                                    <S.WinkFace>
                                        <FontAwesomeIcon icon={faSmileWink} />
                                    </S.WinkFace>
                                    <h5>Schon gar nicht schlecht!</h5>
                                    <p>
                                        {`Du hattest ${result} / 10 Antworten richtig!`}
                                        <br />
                                        Das kann sich schon sehen lassen!
                                    </p>
                                </S.Feedback>
                            }
                            {(result >= 8) &&
                                <S.Feedback
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 5, type: 'spring' }}
                                >
                                    <S.HappyFace>
                                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                                    </S.HappyFace>
                                    <h5>Sehr gut, weiter so!</h5>
                                    <p>
                                        {`Du hattest ganze ${result} / 10 Antworten richtig!`}
                                        <br /> 
                                        Dieses Ergebnis kann sich sehen lassen!
                                    </p>
                                </S.Feedback>
                            }
                            
                            
                    </S.FeedbackContent>
                }
                
        </S.QuestionRoundDuellModal>
    )
}

export default QuestionRoundDuellModal
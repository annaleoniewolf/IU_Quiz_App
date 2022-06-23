import * as S from './styles'
import Timer from '../../elements/Timer'
import { useState } from 'react'


const QuestionRoundDuellModal = () => {

    const [selected, setSelected] = useState(null)
    const [currentQuestion] = useState(0)

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


    return (
        <S.QuestionRoundDuellModal>
            <S.Content>
                <Timer expiryTimestamp={1}/>
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
            </S.Content>   
        </S.QuestionRoundDuellModal>
    )
}

export default QuestionRoundDuellModal
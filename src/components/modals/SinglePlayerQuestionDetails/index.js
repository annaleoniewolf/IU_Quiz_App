import * as S from './styles'
import { useState } from 'react'



const SinglePlayerQuestionDetails = () => {
    //needs a get publicQuestionById Query
    const [questionByID] = useState({
        "question": "Bei einem rechtsseitigen Test bezüglich des Erwartungswerts soll nachgewiesen werden...",
        "answerA": "dass der wahre, aber unbekannte Erwartungswert sich von einem vorab postulierten Wert unterschiedet",
        "answerB": "dass der wahre, aber unbekannte Erwartungswert identisch ist mit einem vorab postulierten Wert",
        "answerC": "dass der wahre, aber unbekannte Erwartungswert größer ist als ein vorab postulierter Wert",
        "answerD": "dass der wahre, aber unbekannte Erwartungswert kleiner ist als ein vorab postulierter Wert",
        "correctAnswer": 'C'
    })

    return (
        <S.SinglePlayerQuestionDetails>
            <h5>Frage:</h5>
            <p>{questionByID.question}</p>
            <hr/>
            <S.Answer correct={questionByID.correctAnswer === 'A' ? true : false}>
                <h6>Antwortmöglichkeit A:</h6>
            </S.Answer>
            <p>{questionByID.answerA}</p>
            <hr/>
            <S.Answer correct={questionByID.correctAnswer === 'B' ? true : false}>
                <h6>Antwortmöglichkeit B:</h6>
            </S.Answer>
            <p>{questionByID.answerB}</p>
            <hr/>
            <S.Answer correct={questionByID.correctAnswer === 'C' ? true : false}>
                <h6>Antwortmöglichkeit C:</h6>
            </S.Answer>
            <p>{questionByID.answerC}</p>
            <hr/>
            <S.Answer correct={questionByID.correctAnswer === 'D' ? true : false}>
                <h6>Antwortmöglichkeit D:</h6>
            </S.Answer>
            <p>{questionByID.answerD}</p>
        </S.SinglePlayerQuestionDetails>
    )
}

export default SinglePlayerQuestionDetails
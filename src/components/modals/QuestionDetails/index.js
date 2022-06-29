import * as S from './styles'
import {  useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'
import GET_QUESTION_BY_ID from '../../../apollo/queries/getQuestionById'


const QuestionDetails = () => {

   //ausgewählte FragenID
    const { questionId } = useSelector((state) => state.question)

    //getQuestionById Query
    const { data: question } = useQuery(GET_QUESTION_BY_ID, {
        variables: {
            question_uuid: questionId
        }
    });

    return (
        <S.QuestionDetails>
            { question &&
                <>
                    <h5>Frage:</h5>
                    <p>{question.getQuestionById.question}</p>
                    <hr/>
                    <S.Answer correct={question.getQuestionById.correct_answer === 'A' ? true : false}>
                        <h6>Antwortmöglichkeit A:</h6>
                    </S.Answer>
                    <p>{question.getQuestionById.answer_a}</p>
                    <hr/>
                    <S.Answer correct={question.getQuestionById.correct_answer === 'B' ? true : false}>
                        <h6>Antwortmöglichkeit B:</h6>
                    </S.Answer>
                    <p>{question.getQuestionById.answer_b}</p>
                    <hr/>
                    <S.Answer correct={question.getQuestionById.correct_answer === 'C' ? true : false}>
                        <h6>Antwortmöglichkeit C:</h6>
                    </S.Answer>
                    <p>{question.getQuestionById.answer_c}</p>
                    <hr/>
                    <S.Answer correct={question.getQuestionById.correct_answer === 'D' ? true : false}>
                        <h6>Antwortmöglichkeit D:</h6>
                    </S.Answer>
                    <p>{question.getQuestionById.answer_d}</p>
                    {question.getQuestionById.explanation &&
                        <>
                            <hr/>
                            <h5>Erklärung</h5>
                            <p>{question.getQuestionById.explanation}</p>
                        </>
                    }
                </>
            }
        </S.QuestionDetails>
    )
}

export default QuestionDetails
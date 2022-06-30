import * as S from './styles'
//import Timer from '../../elements/Timer'
import { useState, useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'
import { useQuery, useMutation } from '@apollo/client'
import GET_QUESTIONS_FOR_GAME from '../../../apollo/queries/getQuestionsForGame'
import ANSWER_GAME_QUESTION from '../../../apollo/mutations/answerGameQuestion'



const QuestionRoundDuellModal = () => {

    //Modals
    const { setOpen} = useContext(ModalContext)
    
    const [selected, setSelected] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [choosenQuestions] = useState([])

    //game uuid from active game
    const activeGame = localStorage.getItem("activeGame")

    //getQuestionsForGame Query
    const { data: gameQuestions } = useQuery(GET_QUESTIONS_FOR_GAME, {
        variables: {
            game_uuid: activeGame
        }
    }); 

    //answerQuestion mutation
    //startGame Mutation
    const [answerQuestions] = useMutation(ANSWER_GAME_QUESTION)

    //goes to new question
    const nextQuestion = () => {

        if (currentQuestion < 3) {
            setCurrentQuestion(currentQuestion+1)
            setSelected('')
        } else setOpen(false)
    }

    //handles question selection
    const handleSelect = (answer) => {
        //selects answer
        setSelected(answer)
        choosenQuestions.push(answer)
        //goes to new question
        nextQuestion()  
        //if all questions answerd run answerQuestionMutation
        if (currentQuestion === 2) {
            answerQuestions({ 
                variables: { 
                    answerGameQuestionInput: {
                        game_uuid: activeGame,
                        game_question_uuid: gameQuestions.getQuestionsForGame[0].uuid,
                        answer: choosenQuestions[0]
                    }
                } 
            })
            answerQuestions({ 
                variables: { 
                    answerGameQuestionInput: {
                        game_uuid: activeGame,
                        game_question_uuid: gameQuestions.getQuestionsForGame[1].uuid,
                        answer: choosenQuestions[1]
                    }
                } 
            })
            answerQuestions({ 
                variables: { 
                    answerGameQuestionInput: {
                        game_uuid: activeGame,
                        game_question_uuid: gameQuestions.getQuestionsForGame[2].uuid,
                        answer: choosenQuestions[2]
                    }
                } 
            })
            //window.location.reload();
        }
    }

    return (
        <S.QuestionRoundDuellModal>
            {(gameQuestions && currentQuestion < 3) &&
                <S.Content>
                    {/*<Timer expiryTimestamp={1}/>*/}
                    <h4>{gameQuestions.getQuestionsForGame[currentQuestion].question.question}</h4>
                    <S.Answers>
                        <S.Answer selected={selected === 'A' ? true : false} onClick={() => handleSelect('A')}>
                            <p>{gameQuestions.getQuestionsForGame[currentQuestion].question.answer_a}</p>
                        </S.Answer>
                        <S.Answer selected={selected === 'B' ? true : false}  onClick={() => handleSelect('B')}>
                            <p>{gameQuestions.getQuestionsForGame[currentQuestion].question.answer_b}</p>
                        </S.Answer>
                        <S.Answer selected={selected === 'C' ? true : false}  onClick={() => handleSelect('C')}>
                            <p>{gameQuestions.getQuestionsForGame[currentQuestion].question.answer_c}</p>
                        </S.Answer>
                        <S.Answer selected={selected === 'D' ? true : false}  onClick={() => handleSelect('D')}>
                            <p>{gameQuestions.getQuestionsForGame[currentQuestion].question.answer_d}</p>
                        </S.Answer>
                    </S.Answers>
                </S.Content>   
            }
            {(gameQuestions && currentQuestion === 3) &&
                <S.Content>
                    <p>Deine Fragen wurden abgeschickt!</p>
                </S.Content>   
            }
        </S.QuestionRoundDuellModal>
    )
}

export default QuestionRoundDuellModal
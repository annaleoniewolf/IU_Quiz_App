import * as S from './styles'

import Button from '../../elements/forms/Button'
import ProgressBar from '../../elements/ProgressBar'

import { useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { setCurrentQuestion, setQuestions } from '../../../redux/singlePlayerGame'

const QuestionRoundSinglePlayerModal = () => {

    //Redux
    const dispatch = useDispatch()
    const { questions, currentQuestion } = useSelector((state) => state.singlePlayerGame)

    const [selected, setSelected] = useState(null)

    //weiter button handler
    const handleButton = () => {

        //wählt die Antwortmöglichkeit aus, für die sich entschieden wurde
        //dispatch(setQuestions[currentQuestion].selectedAnswer(selected))
        console.log("Antwort:", selected)

        //inkrementiert aktuelle Frage
        dispatch(setCurrentQuestion(currentQuestion+1))
    }

    const handleCloseButton = () => {
        //close Modal
    }

    return (
        <S.QuestionRoundSinglePlayerModal>
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
                        <S.Feedback>
                            <p>Du bist durch!</p>
                        </S.Feedback>
                        <Button label="Beenden" onClick={() => handleCloseButton()} />
                    </S.FeedbackContent>
                }
                
        </S.QuestionRoundSinglePlayerModal>
    )
}

export default QuestionRoundSinglePlayerModal
import * as S from './styles'

import Button from '../../elements/forms/Button'
import ProgressBar from '../../elements/ProgressBar'

import { useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { setCurrentQuestion, setSelectedQuestions } from '../../../redux/singlePlayerGame'

const QuestionRoundSinglePlayerModal = () => {

    //Redux
    const dispatch = useDispatch()
    const { questions, currentQuestion, selectedQuestions } = useSelector((state) => state.singlePlayerGame)

    const [selected, setSelected] = useState(null)

    //weiter button handler
    const handleButton = () => {

        //wählt die Antwortmöglichkeit aus, für die sich entschieden wurde
        dispatch(setSelectedQuestions(selected))

        //inkrementiert aktuelle Frage
        dispatch(setCurrentQuestion(currentQuestion+1))
      
        setSelected(null)
    }

    //Zählt Ergebnispunkte zusammen
    const countPoints = () => {
        let count = 0
        for (let i = 0; i < questions.length; i++) {
            if (selectedQuestions[i] === questions[i].correctAnswer) {
                count++
            }
        }
        return count
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
                            <p>{`Du hattest ${countPoints()} / 10 Antworten richtig!`}</p>
                        </S.Feedback>
                    </S.FeedbackContent>
                }
                
        </S.QuestionRoundSinglePlayerModal>
    )
}

export default QuestionRoundSinglePlayerModal
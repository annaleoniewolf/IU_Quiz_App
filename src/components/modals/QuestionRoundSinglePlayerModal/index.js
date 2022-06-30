import * as S from './styles'

import Button from '../../elements/forms/Button'
import ProgressBar from '../../elements/ProgressBar'

import { useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { setCurrentQuestion, setSelectedQuestions } from '../../../redux/singlePlayerGame'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown, faFaceSmileBeam, faSmileWink } from '@fortawesome/free-solid-svg-icons'

const QuestionRoundSinglePlayerModal = () => {

    //Redux
    const dispatch = useDispatch()
    const { questions, currentQuestion, selectedQuestions } = useSelector((state) => state.singlePlayerGame)

    const [selected, setSelected] = useState(null)


    const handleButton = () => {


        dispatch(setSelectedQuestions(selected))

        dispatch(setCurrentQuestion(currentQuestion+1))
      
        setSelected(null)
    }

 
    const countPoints = () => {
        let count = 0
        for (let i = 0; i < questions.length; i++) {
            if (selectedQuestions[i] === questions[i].correct_answer) {
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
                                <p>{questions[currentQuestion].answer_a}</p>
                            </S.Answer>
                            <S.Answer selected={selected === 'B' ? true : false}  onClick={() => setSelected('B')}>
                                <p>{questions[currentQuestion].answer_b}</p>
                            </S.Answer>
                            <S.Answer selected={selected === 'C' ? true : false}  onClick={() => setSelected('C')}>
                                <p>{questions[currentQuestion].answer_c}</p>
                            </S.Answer>
                            <S.Answer selected={selected === 'D' ? true : false}  onClick={() => setSelected('D')}>
                                <p>{questions[currentQuestion].answer_d}</p>
                            </S.Answer>
                        </S.Answers>
                        <Button label="Weiter" onClick={() => handleButton()} />
                    </S.Content>
                : 
                    <S.FeedbackContent>
                            {countPoints() <= 5 && 
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
                                        {`Du hattest leider nur ${countPoints()} / 10 Antworten richtig!`}
                                        <br /> 
                                        Am besten versuchst du es gleich noch mal!
                                    </p>
                                </S.Feedback>
                            }
                            {(countPoints() > 5 && countPoints() < 8) &&
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
                                        {`Du hattest ${countPoints()} / 10 Antworten richtig!`}
                                        <br />
                                        Das kann sich schon sehen lassen!
                                    </p>
                                </S.Feedback>
                            }
                            {(countPoints() >= 8) &&
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
                                        {`Du hattest ganze ${countPoints()} / 10 Antworten richtig!`}
                                        <br /> 
                                        Dieses Ergebnis kann sich sehen lassen!
                                    </p>
                                </S.Feedback>
                            }
                            
                            
                    </S.FeedbackContent>
                }
                
        </S.QuestionRoundSinglePlayerModal>
    )
}

export default QuestionRoundSinglePlayerModal
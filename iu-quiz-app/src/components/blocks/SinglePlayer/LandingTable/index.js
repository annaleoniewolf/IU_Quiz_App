import * as S from './styles'

import Button from '../../../elements/forms/Button'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'

import {  useSelector } from 'react-redux'
//import { setCurrentQuestion, setQuestions } from '../../../../redux/singlePlayerGame'

const LandingTable = () => {

    //Dimension für Responsive
    const { width } = useWindowDimensions();


    //Redux
    const { module, questions, selectedQuestions } = useSelector((state) => state.singlePlayerGame)

    //Spiel beenden Modal
    const { setOpen, setType} = useContext(ModalContext)
    const handleStopModal = () => {
        setType("Stop")
        setOpen(true)
    }
    //Fragen Modal
    const handleQuestionRoundSinglePlayerModal = () => {
        setType("QuestionRoundSinglePlayer")
        setOpen(true)
    }

    console.log("SelectedQuestions:", selectedQuestions)

    return (
        <S.LandingTable>
            <p>{module && module}</p>
            <S.Overview>
                {width > 800 ?
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Frage</th>
                                <th>Richtig beantwortet</th>
                                <th>Details</th>
                            </tr>
                            {questions &&
                                questions.map(({id, question, correctAnswer}, index) => {
                                    return (
                                        <tr key={index}>
                                            {console.log("SelectedQuestoinIndex", (correctAnswer !== selectedQuestions[index] ) && (selectedQuestions[index] !== undefined))}
                                            <td><S.Id>{id+1}</S.Id></td>
                                            <td>
                                                {selectedQuestions[index] === null ?
                                                    <S.Text>noch nicht beantwortet</S.Text>
                                                :   
                                                    <S.QuestionText>{question}</S.QuestionText>
                                                }
                                            </td>
                                            <td>
                                                {correctAnswer === selectedQuestions[index] &&
                                                    <S.CheckIcon>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </S.CheckIcon>
                                                }
                                                {((correctAnswer !== selectedQuestions[index] ) && (selectedQuestions[index] !== undefined)) &&
                                                    <S.XIcon>
                                                        <FontAwesomeIcon icon={faX} />
                                                    </S.XIcon>
                                                }
                                            </td>
                                            <td>
                                                {selectedQuestions[index] === undefined ?
                                                    <Button label="DETAILS" size="small" inactive/>
                                                :
                                                    <Button label="Details" size="small" />
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                : 
                    <S.Responsive>
                        {questions &&
                            questions.map(({id, question, selectedAnswer, correctAnswer}, index) => {
                                return(
                                    <S.ResponsiveItem key={index}>
                                        <S.Question>
                                            <h5>{id+1}. Frage</h5>
                                            {selectedQuestions[index] === null ?
                                                    <S.Text>noch nicht beantwortet</S.Text>
                                                :   
                                                    <S.QuestionText>{question}</S.QuestionText>
                                                }
                                        </S.Question>
                                        <hr className="itemLine" />
                                        <S.Options>
                                            <S.Option>
                                                <h6>Richtig beantwortet</h6>
                                                {correctAnswer === selectedQuestions[index] &&
                                                    <S.CheckIcon>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </S.CheckIcon>
                                                }
                                                {((correctAnswer !== selectedQuestions[index] ) && (selectedQuestions[index] !== undefined)) &&
                                                    <S.XIcon>
                                                        <FontAwesomeIcon icon={faX} />
                                                    </S.XIcon>
                                                }
                                            </S.Option>
                                            <S.Option>
                                                <h6>Frage melden</h6>
                                                {selectedAnswer === undefined ?
                                                    <Button label="DETAILS" size="small" inactive/>
                                                :
                                                    <Button label="Details" size="small" />
                                                }
                                            </S.Option>
                                        </S.Options>
                                        <hr/>
                                    </S.ResponsiveItem >
                                )
                            })
                        }
                    </S.Responsive>
                }
            </S.Overview>
            <S.Buttons>
                <Button label="Spiel Starten" onClick={() => handleQuestionRoundSinglePlayerModal()} />
                <Button label="Beenden" red onClick={() => handleStopModal()} />
            </S.Buttons>
        </S.LandingTable>
    )
}

export default LandingTable
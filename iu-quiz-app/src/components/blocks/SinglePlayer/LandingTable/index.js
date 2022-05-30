import * as S from './styles'

import Button from '../../../elements/forms/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'

import {  useSelector } from 'react-redux'
//import { setCurrentQuestion, setQuestions } from '../../../../redux/singlePlayerGame'

const LandingTable = () => {

    //Redux
    const { module, questions } = useSelector((state) => state.singlePlayerGame)

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

    return (
        <S.LandingTable>
            <p>{module && module}</p>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Frage</th>
                        <th>Richtig beantwortet</th>
                        <th>Details</th>
                    </tr>
                    {questions &&
                        questions.map(({id, question, selectedAnswer, correctAnswer}, index) => {
                            return (
                                <tr key={index}>
                                    <td><S.Id>{id+1}</S.Id></td>
                                    <td>
                                        {selectedAnswer === null ?
                                            <S.Text>noch nicht beantwortet</S.Text>
                                        :   
                                            <S.Text>{question}</S.Text>
                                        }
                                    </td>
                                    <td>
                                        {correctAnswer === selectedAnswer &&
                                            <S.CheckIcon>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </S.CheckIcon>
                                        }
                                        {((correctAnswer === selectedAnswer ) && (correctAnswer !== null)) &&
                                            <S.XIcon>
                                                <FontAwesomeIcon icon={faX} />
                                            </S.XIcon>
                                        }
                                    </td>
                                    <td>
                                        {selectedAnswer === null ?
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
            <S.Buttons>
                <Button label="Spiel Starten" onClick={() => handleQuestionRoundSinglePlayerModal()} />
                <Button label="Beenden" red onClick={() => handleStopModal()} />
            </S.Buttons>
        </S.LandingTable>
    )
}

export default LandingTable
import * as S from './styles'

import Button from '../../../elements/forms/Button'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'

import {  useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setQuestionId }from '../../../../redux/questionSlice'


const LandingTable = () => {

    //dimension for responsive
    const { width } = useWindowDimensions();


    //Redux
    const { module, questions, selectedQuestions } = useSelector((state) => state.singlePlayerGame)
    const { activeGame } = useSelector((state) => state.singlePlayerGame)
    const dispatch = useDispatch()

 
    const { setOpen, setType} = useContext(ModalContext)
    const handleStopModal = () => {
        setType("Stop")
        setOpen(true)
    }

    const handleQuestionRoundSinglePlayerModal = () => {
        setType("QuestionRoundSinglePlayer")
        setOpen(true)
    }
    //Details zu den Fragen Modal
    const openDetails = (id) => {
        dispatch(setQuestionId(id))
        setType("QuestionDetails")
        setOpen(true)
    }

    return (
        <S.LandingTable>
            {activeGame ?
                <>
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
                                        questions.map(({ question, correct_answer, uuid}, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><S.Id>{index+1}</S.Id></td>
                                                    <td>
                                                        {selectedQuestions[index] === undefined ?
                                                            <S.Text>noch nicht beantwortet</S.Text>
                                                        :   
                                                            <S.QuestionText>{question}</S.QuestionText>
                                                        }
                                                    </td>
                                                    <td>
                                                        {correct_answer === selectedQuestions[index] &&
                                                            <S.CheckIcon>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </S.CheckIcon>
                                                        }
                                                        {((correct_answer !== selectedQuestions[index] ) && (selectedQuestions[index] !== undefined)) &&
                                                            <S.XIcon>
                                                                <FontAwesomeIcon icon={faX} />
                                                            </S.XIcon>
                                                        }
                                                    </td>
                                                    <td>
                                                        {selectedQuestions[index] === undefined ?
                                                            <Button label="DETAILS" size="small" inactive/>
                                                        :
                                                            <Button label="Details" size="small" onClick={() => openDetails(uuid)} />
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
                                    questions.map(({ question, correct_answer, uuid}, index) => {
                                        return(
                                            <S.ResponsiveItem key={index}>
                                                <S.Question>
                                                    <h5>{index+1}. Frage</h5>
                                                    {selectedQuestions[index] === undefined ?
                                                            <S.Text>noch nicht beantwortet</S.Text>
                                                        :   
                                                            <S.QuestionText>{question}</S.QuestionText>
                                                        }
                                                </S.Question>
                                                <hr className="itemLine" />
                                                <S.Options>
                                                    <S.Option>
                                                        <h6>Richtig beantwortet</h6>
                                                        {correct_answer === selectedQuestions[index] &&
                                                            <S.CheckIcon>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </S.CheckIcon>
                                                        }
                                                        {((correct_answer !== selectedQuestions[index] ) && (selectedQuestions[index] !== undefined)) &&
                                                            <S.XIcon>
                                                                <FontAwesomeIcon icon={faX} />
                                                            </S.XIcon>
                                                        }
                                                    </S.Option>
                                                    <S.Option>
                                                        <h6>Details anzeigen</h6>
                                                        {selectedQuestions[index] === undefined ?
                                                            <Button label="DETAILS" size="small" inactive/>
                                                        :
                                                            <Button label="Details" size="small" onClick={() => openDetails(uuid)} />
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
                </>
            :
                <S.ErrorMessage>
                    <p>Bitte kehre zum Dashboard zurück und starte ein Spiel!</p>
                    <NavLink to="/">
                        <Button label="Dashboard" />
                    </NavLink>
                </S.ErrorMessage>
            }     
        </S.LandingTable>
    )
}

export default LandingTable
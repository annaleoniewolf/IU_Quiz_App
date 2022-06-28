import * as S from './styles'
import Button from '../../../../elements/forms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle} from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@apollo/client/react'
import GET_ALL_QUESTIONS from '../../../../../apollo/queries/getAllQuestions'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import { useContext } from 'react'
import { ModalContext } from '../../../../../context/ModalContext'
import { useDispatch } from 'react-redux'
import { setQuestionId } from '../../../../../redux/questionSlice'

const Questions = ({ module }) => {
     //Dimension für Responsive
     const { width } = useWindowDimensions();

     //Details Modal
     const { setOpen, setType} = useContext(ModalContext)

     //Redux
     const dispatch = useDispatch()

     //Details zu den Fragen Modal
    const openDetails = (id) => {
        dispatch(setQuestionId(id))
        setType("QuestionDetails")
        setOpen(true)
    }
 
     //Frage löschen Modal
     const handleDeleteQuestionModal = () => {
         setType("DeleteQuestion")
         setOpen(true)
     }
 

    //getAllQuestionsQuery
    const { data: questionData } = useQuery(GET_ALL_QUESTIONS, {
        variables: {
            filter: {
                module_uuid: module,
                own_questions_only: true
            }
        }
    });
    return (
        <S.Questions>
            {questionData && <p>{`${questionData.getAllQuestions.length} Frage(n)`}</p>}
            {width > 800 ?
                <table>
                    <tbody>
                        {questionData && (questionData.getAllQuestions.length !== 0) ?
                            <tr>
                                <th>Frage</th>
                                <th>Details</th>
                                <th>Frage entfernen</th>
                            </tr>
                        :
                            <tr></tr>
                        }

                        {questionData &&
                            questionData.getAllQuestions.map(({ question, uuid }, index) => {
                                return (
                                    <tr key={index}>
                                        <td><p>{question}</p></td>
                                        <td>
                                            <Button size="small" label="Details" onClick={() => openDetails(uuid)} />
                                        </td>
                                        <td>
                                            <S.DeleteButton onClick={() => handleDeleteQuestionModal()}>
                                                <FontAwesomeIcon icon={faXmarkCircle} />
                                            </S.DeleteButton>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            :
                <S.Responsive>
                    {questionData &&
                        questionData.getAllQuestions.map(({question, uuid}, index) => {
                            return(
                                <S.ResponsiveItem key={index}>
                                    <S.Question>
                                        <h5>Frage</h5>
                                        <p>{question}</p>
                                    </S.Question>
                                    <hr className="itemLine" />

                                    <S.Question>
                                        <Button size="small" label="Details" onClick={() => openDetails(uuid)} />
                                    </S.Question>
                                    <hr className="itemLine" />
                                    <S.Options>
                                        <S.Option>
                                            <h6>Frage entfernen</h6>
                                            <S.DeleteButton onClick={() => handleDeleteQuestionModal()}>
                                                <FontAwesomeIcon icon={faXmarkCircle} />
                                            </S.DeleteButton>
                                        </S.Option>
                                    </S.Options>
                                    <hr/>
                                </S.ResponsiveItem >
                            )
                        })
                    }
                </S.Responsive>
            }
        </S.Questions>
    )
}

export default Questions
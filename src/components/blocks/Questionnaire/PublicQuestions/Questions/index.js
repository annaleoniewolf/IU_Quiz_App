import * as S from './styles'
import Button from '../../../../elements/forms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@apollo/client/react'
import GET_ALL_QUESTIONS from '../../../../../apollo/queries/getAllQuestions'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import { useContext } from 'react'
import { ModalContext } from '../../../../../context/ModalContext'
import { useDispatch } from 'react-redux'
import { setQuestionId } from '../../../../../redux/questionSlice'

const Questions = ({ module }) => {
     //dimension for responsive
     const { width } = useWindowDimensions();
     //Redux
     const dispatch = useDispatch()

     //details Modal
     const { setOpen, setType} = useContext(ModalContext)

    const openDetails = (id) => {
        dispatch(setQuestionId(id))
        setType("QuestionDetails")
        setOpen(true)
    }

    //getAllQuestionsQuery
    const { data: questionData } = useQuery(GET_ALL_QUESTIONS, {
        variables: {
            filter: {
                module_uuid: module,
                own_questions_only: false
            }
        }
    });

    return (
        <S.Questions>
            {questionData && <p>{`${questionData.getAllQuestions.length} Frage(n)`}</p>}
            <S.Container>
                {width > 800 ?
                    <table>
                        <tbody>
                            {questionData && (questionData.getAllQuestions.length !== 0) ?
                                <tr>
                                    <th>Frage</th>
                                    <th>Details</th>
                                    <th>Frage Melden</th>
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
                                                <Button size="small" label="Details" onClick={() => openDetails(uuid)}/>
                                            </td>
                                            <td>
                                                <S.BanButton>
                                                    <FontAwesomeIcon icon={faBan} />
                                                </S.BanButton>
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
                                        <S.Options>
                                            <S.Option>
                                                <h6>Details</h6>
                                                <Button size="small" label="Details" onClick={() => openDetails(uuid)}/>
                                            </S.Option>
                                            <S.Option>
                                                <h6>Frage melden</h6>
                                                <S.BanButton>
                                                    <FontAwesomeIcon icon={faBan} />
                                                </S.BanButton>
                                            </S.Option>
                                        </S.Options>
                                        <hr/>
                                    </S.ResponsiveItem >
                                )
                            })
                        }
                    </S.Responsive>
                }
            </S.Container>
        </S.Questions>
    )
}

export default Questions
import * as S from './styles'
import Button from '../../../elements/forms/Button'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle, faPen } from '@fortawesome/free-solid-svg-icons'
import Select from "../../../elements/forms/Select"

import useWindowDimensions from '../../../hooks/useWindowDimensions'

import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'

import { useQuery } from '@apollo/client/react'
import GET_ALL_QUESTIONS from '../../../../apollo/queries/getAllQuestions'
import GET_MODULES from '../../../../apollo/queries/getModules'

const MyQuestions = () => {

    //Dimension für Responsive
    const { width } = useWindowDimensions();

    //Details Modal
    const { setOpen, setType} = useContext(ModalContext)
    const openDetails = () => {
        setType("QuestionDetails")
        setOpen(true)
    }

    //Frage bearbeiten Modal
    const openEdit = () => {
        setType("EditQuestion")
        setOpen(true)
    }

    //Frage löschen Modal
    const handleDeleteQuestionModal = () => {
        setType("DeleteQuestion")
        setOpen(true)
    }

    //getModules Query
    const { data: moduleData } = useQuery(GET_MODULES);

    const generateModuleOptions = () => {
        if (moduleData) {
            const generatedModules = moduleData.getModules.map(item => {
                const container = {};
                container.label = item.name;
                container.value = item.uuid
            
                return container;
            })
            return generatedModules
        }
    }
    //Wählt module aus
    const [module, setModule] = useState({module_uuid: null})
    const selectHandler = (event) => {
        const value = event.value
        setModule(module => {
           module.module_uuid = value
        })
        refetch({filter: module})
    }

    //getAllQuestionsQuery

    const { data: questionData, refetch } = useQuery(GET_ALL_QUESTIONS);

    return (
        <S.MyQuestions>
            {questionData && <p>{`${questionData.getAllQuestions.length} Frage(n)`}</p>}
            <S.Select>
                <label>Modul auswählen</label>
                <Select placeholder="Modul" options={generateModuleOptions()} onChange={selectHandler}/>
            </S.Select>
            {width > 800 ?
                <table>
                    <tbody>
                        {questionData ? 
                            <tr>
                                <th>Frage</th>
                                <th>Modul</th>
                                <th>Details</th>
                                <th>Bearbeiten</th>
                                <th>Frage entfernen</th>
                            </tr>
                        :
                            <tr></tr>
                        }

                        {questionData &&
                            questionData.getAllQuestions.map(({ question, module : { name: moduleName } }, index) => {
                                return (
                                    <tr key={index}>
                                        <td><p>{question}</p></td>
                                        <td><h6>{moduleName}</h6></td>
                                        <td>
                                            <Button size="small" label="Details" onClick={() => openDetails()} />
                                        </td>
                                        <td>
                                            <S.EditButton onClick={() => {openEdit()}}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </S.EditButton>
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
                        questionData.getAllQuestions.map(({question, module : { name: moduleName }}, index) => {
                            return(
                                <S.ResponsiveItem key={index}>
                                    <S.Question>
                                        <h5>Frage</h5>
                                        <p>{question}</p>
                                    </S.Question>
                                    <hr className="itemLine" />
                                    <S.Question>
                                        <h5>Modul</h5>
                                        <p>{moduleName}</p>
                                    </S.Question>
                                    <hr className="itemLine" />
                                    <S.Question>
                                        <Button size="small" label="Details" onClick={() => openDetails()} />
                                    </S.Question>
                                    <hr className="itemLine" />
                                    <S.Options>
                                        <S.Option>
                                            <h6>Bearbeiten</h6>
                                            <S.EditButton onClick={() => {openEdit()}}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </S.EditButton>
                                        </S.Option>
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
        </S.MyQuestions>
    )
}

export default MyQuestions
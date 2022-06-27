import * as S from './styles'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../elements/forms/Button'
import Select from "../../../elements/forms/Select"
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { ModalContext } from '../../../../context/ModalContext'

import GET_MODULES from '../../../../apollo/queries/getModules'
import GET_ALL_QUESTIONS from '../../../../apollo/queries/getAllQuestions'
import { useQuery } from "@apollo/client";

const PublicQuestions = () => {

    //Details Modal
    const { setOpen, setType} = useContext(ModalContext)
    const openDetails = () => {
        setType("QuestionDetails")
        setOpen(true)
    }

    //Dimension für Responsive
    const { width } = useWindowDimensions();

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
    console.log(questionData)

    return (
        <S.PublicQuestions>
            {questionData && <p>{`${questionData.getAllQuestions.length} Fragen`}</p>}
            <S.Select>
                <label>Filtern nach Modul</label>
                <Select placeholder="Modul" options={generateModuleOptions()} onChange={selectHandler}/>
            </S.Select>
            <S.Questions>
                {width > 800 ?
                    <table>
                        <tbody>
                            {questionData ?
                                <tr>
                                    <th>Frage</th>
                                    <th>Modul</th>
                                    <th>Details</th>
                                    <th>Frage Melden</th>
                                </tr>
                            :
                            <tr>
                                <th>Bitte wählen Sie eine Frage aus</th>
                            </tr>

                        }
                            
                            {questionData &&
                                questionData.getAllQuestions.map(({ question, module : { name: moduleName } }, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><p>{question}</p></td>
                                            <td><h6>{moduleName}</h6></td>
                                            <td>
                                                <Button size="small" label="Details" onClick={() => openDetails()}/>
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
                                        <S.Options>
                                            <S.Option>
                                                <h6>Details</h6>
                                                <Button size="small" label="Details" onClick={() => openDetails()}/>
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
            </S.Questions>
                <S.Buttons>
                    <Button label="Mehr laden" inactive/>
                </S.Buttons>
        </S.PublicQuestions>
    )
}

export default PublicQuestions
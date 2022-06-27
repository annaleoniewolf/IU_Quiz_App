import * as S from './styles'
import { useState } from 'react'
import { useForm }from 'react-hook-form';
import Select from '../../../elements/forms/Select'

import { useQuery, useMutation } from '@apollo/client'
import GET_MODULES from '../../../../apollo/queries/getModules'
import ADD_QUESTION from'../../../../apollo/mutations/addQuestion'

const AddQuestion = () => {

     //getModules Query
     const { data: moduleData } = useQuery(GET_MODULES);
    //--generiert die Moduloptionen fürs Select
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
     const [correctAnswer, setCorrectAnswer] = useState(false)
    const [module, setModule] = useState(null)
    const selectHandler = (event) => {
        const value = event.value
        setModule(value)
    }
  
    //form
    const { register, handleSubmit } = useForm()
    const [response, setResponse] = useState(null)

     //AddQuestion Mutation
     const [addQuestion] = useMutation(ADD_QUESTION)

    //führt addQuestion mutation aus, wenn form submitted wird  
    const onSubmit = (abc) => {
        console.log(abc)
        addQuestion({ 
            variables: { 
                addQuestionInput : {
                    question: abc.question, 
                    explanation:abc.explanation,
                    answer_a: abc.answerA,
                    answer_b: abc.answerB,
                    answer_c: abc.answerC,
                    answer_d: abc.answerD,
                    correct_answer: correctAnswer,
                    module_uuid: module 
                }
                
            } })
        .then((data) => {
            if (data.data.addQuestion.default.success){
               setResponse("Deine Frage wurde dem Fragenkatalog hinzugefügt")
            } else {
                console.log()
                setResponse(`Deine Frage konnte dem Fragenkatalog nicht hinzugefügt werden. Error: ${data.data.login.default.message}`)
            }    
        })
        .catch((ex) => {
            console.log(ex)
        })
    }

    return (
        <S.AddQuestion>
            {response === null ? 
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Columns>
                        <S.Column>
                            <S.Select>
                                <label>Modul auswählen</label>
                                <Select placeholder="Modul" options={generateModuleOptions()} onChange={selectHandler}/>
                            </S.Select>
                            <S.Textarea>
                                <label htmlFor="frage">Frage</label>
                                <textarea 
                                    {...register("question", { required: true })} 
                                    id="frage" 
                                    name="frage"
                                />
                            </S.Textarea>
                            <S.Explanation>
                                <label htmlFor="erklareung">Erklärung</label>
                                <textarea 
                                    {...register("explanation", { required: false })} 
                                    id="erklareung" 
                                    name="erklareung"
                                />
                            </S.Explanation>
                        </S.Column>
                        <S.Column>
                            <S.Textarea selected={correctAnswer === "A" ? true : false}>
                                <label htmlFor="answerA">Antwortmöglichkeit A</label>
                                <textarea 
                                    {...register("answerA", { required: true })} 
                                    id="answerA" 
                                    name="answerA"
                                />
                                <S.AnswerSelector 
                                    selected={correctAnswer === "A" ? true : false}
                                    onClick={() => setCorrectAnswer("A")}
                                >
                                    A
                                </S.AnswerSelector>
                            </S.Textarea>
                            <S.Textarea  selected={correctAnswer === "B" ? true : false}>
                                <label htmlFor="answerB">Antwortmöglichkeit B</label>
                                <textarea 
                                    {...register("answerB", { required: true })} 
                                    id="answerB" 
                                    name="answerB"
                                />
                                <S.AnswerSelector 
                                    selected={correctAnswer === "B" ? true : false}
                                    onClick={() => setCorrectAnswer("B")}
                                >
                                    B
                                </S.AnswerSelector>
                            </S.Textarea>
                            <S.Textarea  selected={correctAnswer === "C" ? true : false}>
                                <label htmlFor="answerC">Antwortmöglichkeit C</label>
                                <textarea 
                                    {...register("answerC", { required: true })} 
                                    id="answerC" 
                                    name="answerC"
                                />
                                <S.AnswerSelector 
                                    selected={correctAnswer === "C" ? true : false}
                                    onClick={() => setCorrectAnswer("C")}
                                >
                                    C
                                </S.AnswerSelector>
                            </S.Textarea>
                            <S.Textarea  selected={correctAnswer === "D" ? true : false}>
                                <label htmlFor="answerD">Antwortmöglichkeit D</label>
                                <textarea 
                                    {...register("answerD", { required: true })} 
                                    id="answerD" 
                                    name="answerD"
                                />
                                <S.AnswerSelector 
                                    selected={correctAnswer === "D" ? true : false}
                                    onClick={() => setCorrectAnswer("D")}
                                >
                                    D
                                </S.AnswerSelector>
                            </S.Textarea>
                        </S.Column>
                    </S.Columns>
                    <S.SubmitButton type="submit" value="Frage hinzufügen"/>
                </S.Form>
            :
                <h5>{response}</h5>
            }
            
        </S.AddQuestion>
    )
}

export default AddQuestion
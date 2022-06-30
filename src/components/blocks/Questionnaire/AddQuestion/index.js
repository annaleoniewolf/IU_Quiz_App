import * as S from './styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import Select from '../../../elements/forms/Select';

import GET_MODULES from '../../../../apollo/queries/getModules';
import ADD_QUESTION from '../../../../apollo/mutations/addQuestion';
import { useQuery, useMutation } from '@apollo/client';


const AddQuestion = () => {

    //getModules Query
    const { data: moduleData } = useQuery(GET_MODULES);
    //-mopdul options for select
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

    //AddQuestion Mutation
    const [addQuestion] = useMutation(ADD_QUESTION)

    const [response, setResponse] = useState("")

    //Form
    const { register, handleSubmit } = useForm();

    //OnSubmit
    const onSubmit = (d) => {
        addQuestion({ 
            variables: { 
                addQuestionInput : {
                    question: d.question, 
                    explanation:d.explanation,
                    answer_a: d.answerA,
                    answer_b: d.answerB,
                    answer_c: d.answerC,
                    answer_d: d.answerD,
                    correct_answer: correctAnswer,
                    module_uuid: module 
                }
            } })
            .then((data) => {
                if (data.data.addQuestion.default.success){
                   setResponse("Deine Frage wurde erfolgreich dem Fragenkatalog hinzugefügt.")
                } else {
                    setResponse("Leider ist beim Hinzufügen deiner Frage etwas schief gegangen.")
                }    
            })
            .catch((ex) => {
                console.log(ex)
            })
        //cleart input fields
        setInputExplanation("")
        setInputQuestion("")
        setInputAnswerA("")
        setInputAnswerB("")
        setInputAnswerC("")
        setInputAnswerD("")
        setCorrectAnswer("")
        
    }
    //Select
    const selectHandler = (event) => {
        const value = event.value
        setModule(value)
    }

     const [correctAnswer, setCorrectAnswer] = useState(false)
     const [module, setModule] = useState(moduleData.getModules[0].uuid)

     const [inputQuestion, setInputQuestion] = useState("")
     const [inputExplanation, setInputExplanation] = useState("")
     const [inputAnswerA, setInputAnswerA] = useState("")
     const [inputAnswerB, setInputAnswerB] = useState("")
     const [inputAnswerC, setInputAnswerC] = useState("")
     const [inputAnswerD, setInputAnswerD] = useState("")




    return (
        <S.AddQuestion>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                placeholder="Frage" 
                                onChange={event => setInputQuestion(event.target.value)}
                                value={inputQuestion}
                                maxLength="250"
                            />
                        </S.Textarea>
                        <S.Explanation>
                            <label htmlFor="erklareung">Erklärung</label>
                            <textarea 
                                {...register("explanation", { required: false })} 
                                placeholder="Erklärung" 
                                onChange={event => setInputExplanation(event.target.value)}
                                value={inputExplanation}
                                maxLength="250"
                            />
                        </S.Explanation>
                    </S.Column>
                    <S.Column>
                        <S.Textarea selected={correctAnswer === "A" ? true : false}>
                            <label htmlFor="answerA">Antwortmöglichkeit A</label>
                            <textarea 
                                {...register("answerA", { required: true })} 
                                placeholder="Antwort A" 
                                maxLength="250"
                                onChange={event => setInputAnswerA(event.target.value)}
                                value={inputAnswerA}
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
                                placeholder="Antwort B" 
                                onChange={event => setInputAnswerB(event.target.value)}
                                value={inputAnswerB}
                                maxLength="250"
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
                                placeholder="Antwort C" 
                                onChange={event => setInputAnswerC(event.target.value)}
                                value={inputAnswerC}
                                maxLength="250"
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
                                placeholder="Antwort D" 
                                onChange={event => setInputAnswerD(event.target.value)}
                                value={inputAnswerD}
                                maxLength="250"
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
                <h5>{response}</h5>
                <input type="submit"/>
            </form>
        </S.AddQuestion>
    )
}

export default AddQuestion
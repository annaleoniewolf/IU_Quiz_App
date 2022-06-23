import * as S from './styles'
import { useState } from 'react'
import Select from '../../../elements/forms/Select'

const AddQuestion = () => {

    const [correctAnswer, setCorrectAnswer] = useState(null)

    return (
        <S.AddQuestion>
            <S.Form>
                <S.Columns>
                    <S.Column>
                        <S.Select>
                            <label>Modul auswählen</label>
                            <Select placeholder="Modul"/>
                        </S.Select>
                        <S.Textarea>
                            <label htmlFor="frage">Frage</label>
                            <textarea id="frage" name="frage"></textarea>
                        </S.Textarea>
                        <S.Explanation>
                            <label htmlFor="erklareung">Erklärung</label>
                            <textarea id="erklareung" name="erklareung"></textarea>
                        </S.Explanation>
                    </S.Column>
                    <S.Column>
                        <S.Textarea selected={correctAnswer === "A" ? true : false}>
                            <label htmlFor="answerA">Antwortmöglichkeit A</label>
                            <textarea id="answerA" name="answerA"></textarea>
                            <S.AnswerSelector 
                                selected={correctAnswer === "A" ? true : false}
                                onClick={() => setCorrectAnswer("A")}
                            >
                                A
                            </S.AnswerSelector>
                        </S.Textarea>
                        <S.Textarea  selected={correctAnswer === "B" ? true : false}>
                            <label htmlFor="answerB">Antwortmöglichkeit B</label>
                            <textarea id="answerB" name="answerB"></textarea>
                            <S.AnswerSelector 
                                selected={correctAnswer === "B" ? true : false}
                                onClick={() => setCorrectAnswer("B")}
                            >
                                B
                            </S.AnswerSelector>
                        </S.Textarea>
                        <S.Textarea  selected={correctAnswer === "C" ? true : false}>
                            <label htmlFor="answerC">Antwortmöglichkeit C</label>
                            <textarea id="answerC" name="answerC"></textarea>
                            <S.AnswerSelector 
                                selected={correctAnswer === "C" ? true : false}
                                onClick={() => setCorrectAnswer("C")}
                            >
                                C
                            </S.AnswerSelector>
                        </S.Textarea>
                        <S.Textarea  selected={correctAnswer === "D" ? true : false}>
                            <label htmlFor="answerD">Antwortmöglichkeit D</label>
                            <textarea id="answerD" name="answerD"></textarea>
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
        </S.AddQuestion>
    )
}

export default AddQuestion
import * as S from './styles'
import { useState } from 'react'
import Select from '../../../elements/forms/Select'

const AddQuestion = () => {

    const [correctAnswer, setCorrectAnswer] = useState(null)

    const handleClick = () => {
        
    }

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
                        <S.Textarea>
                            <label htmlFor="erklareung">Erklärung</label>
                            <textarea id="erklareung" name="erklareung"></textarea>
                        </S.Textarea>
                    </S.Column>
                    <S.Column>
                        <S.Textarea>
                            <label htmlFor="answerA">Antwortmöglichkeit A</label>
                            <textarea id="answerA" name="answerA"></textarea>
                            <S.AnswerSelector selected={correctAnswer === "A" ? true : false}>
                                A
                            </S.AnswerSelector>
                        </S.Textarea>
                        <S.Textarea>
                            <label htmlFor="answerB">Antwortmöglichkeit B</label>
                            <textarea id="answerB" name="answerB"></textarea>
                        </S.Textarea>
                        <S.Textarea>
                            <label htmlFor="answerC">Antwortmöglichkeit C</label>
                            <textarea id="answerC" name="answerC"></textarea>
                        </S.Textarea>
                        <S.Textarea>
                            <label htmlFor="answerD">Antwortmöglichkeit D</label>
                            <textarea id="answerD" name="answerD"></textarea>
                        </S.Textarea>
                    </S.Column>
                </S.Columns>
                <S.SubmitButton type="submit" value="Frage hinzufügen"/>
            </S.Form>
        </S.AddQuestion>
    )
}

export default AddQuestion
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
                        <Select />
                        <S.Textarea>
                            <label for="frage">Frage</label>
                            <textarea id="frage" name="frage"></textarea>
                        </S.Textarea>
                        <S.Textarea>
                            <label for="erklareung">Erklärung</label>
                            <textarea id="erklareung" name="erklareung"></textarea>
                        </S.Textarea>
                    </S.Column>
                    <S.Column>
                        <S.Textarea>
                            <label for="answerA">Antwortmöglichkeit A</label>
                            <textarea id="answerA" name="answerA"></textarea>
                            <S.AnswerSelector selected={correctAnswer === "A" ? true : false}>
                                A
                            </S.AnswerSelector>
                        </S.Textarea>
                        <S.Textarea>
                            <label for="answerB">Antwortmöglichkeit B</label>
                            <textarea id="answerB" name="answerB"></textarea>
                        </S.Textarea>
                        <S.Textarea>
                            <label for="answerC">Antwortmöglichkeit C</label>
                            <textarea id="answerC" name="answerC"></textarea>
                        </S.Textarea>
                        <S.Textarea>
                            <label for="answerD">Antwortmöglichkeit D</label>
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
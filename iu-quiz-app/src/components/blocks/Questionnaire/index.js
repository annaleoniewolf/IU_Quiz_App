import * as S from './styles'
import { useState } from 'react'

const Questionnaire = () => {
    const [questionAmount] = useState(1)

    return (
        <S.Questionnaire>
            <p>{`${questionAmount} Fragen`}</p>
            <S.Table>
                <table>
                    <tr>
                        <th>Frage</th>
                        <th>Modul</th>
                        <th>Bearbeiten</th>
                        <th>Frage entfernen</th>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                </table>
            </S.Table>
        </S.Questionnaire>
    )
}

export default Questionnaire
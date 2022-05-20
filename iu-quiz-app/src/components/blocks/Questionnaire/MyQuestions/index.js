import * as S from './styles'
import Button from '../../../elements/forms/Button'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle, faPen } from '@fortawesome/free-solid-svg-icons'

const MyQuestions = () => {
    const [questionAmount] = useState(1)

    return (
        <S.MyQuestions>
            <p>{`${questionAmount} Fragen`}</p>
            <table>
                <tr>
                    <th>Frage</th>
                    <th>Modul</th>
                    <th>Bearbeiten</th>
                    <th>Frage entfernen</th>
                </tr>
                <tr>
                    <td><p>Aus welchen zentralen Elementen besteht die Von-Neumann-Architektur?</p></td>
                    <td><h6>Betriebssysteme, Rechennetze und verteilte Systeme</h6></td>
                    <td>
                        <S.PenButton>
                            <FontAwesomeIcon icon={faPen} />
                        </S.PenButton>
                    </td>
                    <td>
                        <S.DeleteButton>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </S.DeleteButton>
                    </td>
                </tr>
            </table>
            <S.Buttons>
                <Button label="Mehr laden" inactive/>
            </S.Buttons>
        </S.MyQuestions>
    )
}

export default MyQuestions
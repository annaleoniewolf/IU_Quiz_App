import * as S from './styles'
import { useState } from 'react'
import Button from '../../../elements/forms/Button'
import Select from "../../../elements/forms/Select"

const PublicQuestions = () => {
    const [questionAmount] = useState(1)

    //placeholder für select
    const modulOptions = [
        { value: 'Betriebssysteme, Rechennetze und verteilte Systeme', label: 'Betriebssysteme, Rechennetze und verteilte Systeme' },
        { value: 'Statistik', label: 'Statistik' },
        { value: 'Spezifikation', label: 'Spezifikation' }
      ]

    return (
        <S.PublicQuestions>
            <p>{`${questionAmount} Fragen`}</p>
            <S.Select>
                <label>Filtern nach Modul</label>
                <Select placeholder="Modul" options={modulOptions} />
            </S.Select>
            <table>
                <tbody>
                    <tr>
                        <th>Frage</th>
                        <th>Modul</th>
                        <th>Frage Melden</th>
                    </tr>
                    <tr>
                        <td><p>Aus welchen zentralen Elementen besteht die Von-Neumann-Architektur?</p></td>
                        <td><h6>Betriebssysteme, Rechennetze und verteilte Systeme</h6></td>
                        <td>
                            <Button size="small" label="Melden"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <S.Buttons>
                <Button label="Mehr laden" inactive/>
            </S.Buttons>
        </S.PublicQuestions>
    )
}

export default PublicQuestions
import * as S from './styles'
import Button from '../../../elements/forms/Button'
import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'

const LandingTable = () => {
    const { setOpen, setType} = useContext(ModalContext)

    const handleModal = () => {
        setType("Stop")
        setOpen(true)
    }
    return (
        <S.LandingTable>
            <table>
                <tr>
                    <th></th>
                    <th>Frage</th>
                    <th>Richtig beantwortet</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td><S.Id>1</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS" size="small" inactive/></td>
                </tr>
                <tr>
                    <td><S.Id>2</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS" size="small" inactive /></td>
                </tr>
                <tr>
                    <td><S.Id>3</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS" size="small"  inactive/></td>
                </tr>
                <tr>
                    <td><S.Id>4</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS"  size="small" inactive/></td>
                </tr>
                <tr>
                    <td><S.Id>5</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS"  size="small" inactive/></td>
                </tr>
                <tr>
                    <td><S.Id>6</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS"  size="small" inactive/></td>
                </tr>
                <tr>
                    <td><S.Id>7</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS"  size="small" inactive/></td>
                </tr>
                <tr>
                    <td><S.Id>8</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS" size="small" inactive/></td>
                </tr>
                <tr>
                    <td><S.Id>9</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS" size="small" inactive /></td>
                </tr>
                <tr>
                    <td><S.Id>10</S.Id></td>
                    <td><S.Text>noch nicht beantwortet</S.Text></td>
                    <td></td>
                    <td><Button label="DETAILS" size="small" inactive /></td>
                </tr>
            </table>
            <S.Buttons>
                <Button label="Spiel Starten" />
                <Button label="Beenden" red onClick={() => handleModal()} />
            </S.Buttons>
        </S.LandingTable>
    )
}

export default LandingTable
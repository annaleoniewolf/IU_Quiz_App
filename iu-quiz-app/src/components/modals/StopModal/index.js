import * as S from './styles'
import Button from '../../elements/forms/Button'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';

import { ModalContext } from '../../../context/ModalContext';

const StopModal = () => {

     //Modal
     const { setOpen } = useContext(ModalContext)

    const handleButton = () => {
        //schließt modal
        setOpen(false)
    }

    return (
        <S.StopModal>
            <h2>Wirklich beenden?</h2>
            <p>
                Sind Sie sicher, dass sie die Lernrunde beenden wollen?
                <br />
                Sie können ihr aktuelles Spiel zu einem späteren Zeitpunkt fortsetzen.
            </p>
            <NavLink to="/">
                <Button label="Beenden" red onClick={() => {handleButton()}}/>
            </NavLink>
        </S.StopModal>
    )
}

export default StopModal
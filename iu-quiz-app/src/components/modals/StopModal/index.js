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
                Bist du sicher, dass sie die Lernrunde beenden wollen?
                <br />
                Du kannst dein aktuelles Spiel zu einem späteren Zeitpunkt fortsetzen.
                <br/> Möchtest du eine neue Runde beginnen kehre zum Dashboard zurück und erstelle ein neues Spiel!
            </p>
            <NavLink to="/">
                <Button label="Beenden" red onClick={() => {handleButton()}}/>
            </NavLink>
        </S.StopModal>
    )
}

export default StopModal
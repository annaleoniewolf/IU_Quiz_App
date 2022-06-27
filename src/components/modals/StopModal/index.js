import * as S from './styles'
import Button from '../../elements/forms/Button'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'

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
            <S.Icon>
                <FontAwesomeIcon icon={faBookOpen} />
            </S.Icon>
            <h5>Zurück zum Dashboard?</h5>
            <p>
                Bist du sicher, dass du die Lernrunde beenden willst?
                <br />
                Du kannst dein aktuelles Spiel zu einem späteren Zeitpunkt fortsetzen.
                <br/> Möchtest du eine neue Runde beginnen kehre zum Dashboard zurück und erstelle ein neues Spiel!
            </p>
            <NavLink to="/">
                <Button label="Beenden" onClick={() => {handleButton()}}/>
            </NavLink>
        </S.StopModal>
    )
}

export default StopModal
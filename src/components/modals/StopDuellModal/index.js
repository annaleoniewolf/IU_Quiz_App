import * as S from './styles'
import Button from '../../elements/forms/Button'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'

import { ModalContext } from '../../../context/ModalContext';

const StopDuellModal = () => {

     //Modal
     const { setOpen } = useContext(ModalContext)

    const handleButton = () => {
        //closed modal
        setOpen(false)
    }

    return (
        <S.StopDuellModal>
            <S.Icon>
                <FontAwesomeIcon icon={faBookOpen} />
            </S.Icon>
            <h5>Zurück zum Dashboard?</h5>
            <p>
                Du kannst dein aktuelles Spiel zu einem späteren Zeitpunkt fortsetzen.
            </p>
            <NavLink to="/">
                <Button label="Beenden" onClick={() => {handleButton()}}/>
            </NavLink>
        </S.StopDuellModal>
    )
}

export default StopDuellModal
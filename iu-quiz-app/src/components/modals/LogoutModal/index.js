import * as S from './styles'
import Button from '../../elements/forms/Button'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'

const LogoutModal = () => {

     //Modal
     const { setOpen } = useContext(ModalContext)

    const handleButton = () => {
        //schließt modal
        setOpen(false)
    }

    return (
        <S.LogoutModal>
            <S.Icon>
                <FontAwesomeIcon icon={faDoorOpen} />
            </S.Icon>
            <h5>Wirklich Abmelden?</h5>
            <p>
                Dein Fortschritt im Einzelspielermodus geht verloren!
            </p>
            <NavLink to="/login">
                <Button label="Abmelden" onClick={() => {handleButton()}}/>
            </NavLink>
        </S.LogoutModal>
    )
}

export default LogoutModal
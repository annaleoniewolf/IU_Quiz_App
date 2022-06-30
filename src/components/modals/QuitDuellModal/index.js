import * as S from './styles'
import Button from '../../elements/forms/Button'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan} from '@fortawesome/free-solid-svg-icons'

import { ModalContext } from '../../../context/ModalContext';

const QuitDuellModal = () => {


     const { setOpen } = useContext(ModalContext)

    const handleButton = () => {
     
        setOpen(false)
    }

    return (
        <S.QuitDuellModal>
            <S.Icon>
                <FontAwesomeIcon icon={faBan} />
            </S.Icon>
            <h5>Möchtest du wirklich aufgeben?</h5>
            <p>
                Du erhältst keine Punkte von der Runde und dein Lernpartner gewinnt automatisch.
            </p>
            <NavLink to="/">
                <Button label="Aufgeben" red onClick={() => {handleButton()}}/>
            </NavLink>
        </S.QuitDuellModal>
    )
}

export default QuitDuellModal
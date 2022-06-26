import * as S from './styles'
import Button from '../../elements/forms/Button'

import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const DeleteQuestionModal = () => {

     //Modal
     const { setOpen } = useContext(ModalContext)

    const handleButton = () => {
        //schließt modal
        setOpen(false)
    }

    return (
        <S.DeleteQuestionModal>
            <S.Icon>
                <FontAwesomeIcon icon={faBan} />
            </S.Icon>
            <h5>Frage löschen?</h5>
            <p>
                Bist du sicher, dass du diese Frage löschen willst?
                <br />
                Gelöschte Fragen sind nicht wiederherstellbar.
            </p>
            <Button label="Löschen" red onClick={() => {handleButton()}}/>
        </S.DeleteQuestionModal>
    )
}

export default DeleteQuestionModal
import * as S from './styles'
import Button from '../../elements/forms/Button'

import { useContext } from 'react';

import { ModalContext } from '../../../context/ModalContext';

const DeleteQuestionModal = () => {

     //Modal
     const { setOpen } = useContext(ModalContext)

    const handleButton = () => {
        //schließt modal
        setOpen(false)
    }

    return (
        <S.DeleteQuestionModal>
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
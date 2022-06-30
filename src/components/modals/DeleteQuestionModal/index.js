import * as S from './styles'
import Button from '../../elements/forms/Button'

import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import {  useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import REMOVE_QUESTION from '../../../apollo/mutations/removeQuestion'
import { useMutation } from '@apollo/react-hooks';

const DeleteQuestionModal = () => {

     //Modal
     const { setOpen } = useContext(ModalContext)


    const { questionId } = useSelector((state) => state.question)

    //AddQuestion Mutation
    const [removeQuestion] = useMutation(REMOVE_QUESTION)

    const handleButton = () => {
        removeQuestion({ 
            variables: { 
                question_uuid: questionId
            } })
            .then((data) => {
                if (data.data.addQuestion.default.success){
                   
                } else {
                    
                }    
            })
            .catch((ex) => {
                console.log(ex)
            })

        setOpen(false)
        window.setTimeout(function(){window.location.reload()},1000)
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
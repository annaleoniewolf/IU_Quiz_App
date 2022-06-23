import ReactModal from 'react-modal';
import { useContext } from 'react';

import * as S from './styles'
import { ModalContext } from '../../../context/ModalContext';

import NewGameModal from '../NewGameModal'
import StopModal from '../StopModal'
import QuestionRoundSinglePlayerModal from '../QuestionRoundSinglePlayerModal'
import QuestionDetails from '../QuestionDetails';
import SinglePlayerQuestionDetails from '../SinglePlayerQuestionDetails';
import QuestionRoundDuellModal from '../QuestionRoundDuellModal';
import DeleteQuestionModal from '../DeleteQuestionModal';
import LogoutModal from '../LogoutModal';
import StopDuellModal from '../StopDuellModal';
import QuitDuellModal from '../QuitDuellModal';
import ResultDuellModal from '../ResultDuellModal';


import CloseButton from '../../elements/forms/CloseButton'

ReactModal.setAppElement('#root')

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overlay: 'background: rgba(0, 0, 0, 0.6',
      padding: '40px'
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0.6)'
    }
  };




const Modal = () => {
    
    const {open, setOpen, type} = useContext(ModalContext)

    return (
        <S.Modal>
            <ReactModal 
                isOpen={open} 
                onRequestClose={() => setOpen(false)} 
                style={customStyles}
            >
                <S.CloseButton>
                    <CloseButton onClick={() => setOpen(false)} />
                </S.CloseButton>
                <S.ModalContent>
                    {type === "NewGame" && <NewGameModal />}
                    {type === "Stop" && <StopModal />}
                    {type === "QuestionRoundSinglePlayer" && <QuestionRoundSinglePlayerModal/>}
                    {type === "QuestionDetails" && <QuestionDetails/>}
                    {type === "SinglePlayerQuestionsDetails" && <SinglePlayerQuestionDetails />}
                    {type === "QuestionRoundDuell" && <QuestionRoundDuellModal />}
                    {type === "DeleteQuestion" && <DeleteQuestionModal />}
                    {type === "Logout" && <LogoutModal />}
                    {type === "StopDuell" && <StopDuellModal />}
                    {type === "QuitDuell" && <QuitDuellModal />}
                    {type === "ResultDuell" && <ResultDuellModal />}
                </S.ModalContent>
            </ReactModal>
        </S.Modal>
    )
}

export default Modal
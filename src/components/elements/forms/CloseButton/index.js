import * as S from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'


const CloseButton = ({onClick}) => {
    return (
        <S.CloseButton onClick={onClick}>
            <FontAwesomeIcon icon={faX} size="2x"/>
        </S.CloseButton>
    )
}

export default CloseButton
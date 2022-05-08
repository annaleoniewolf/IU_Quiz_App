import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SelectGameCard = ({icon, title, text, onClick, selected}) => {
    return (
        <S.SelectGameCard onClick={onClick} selected={selected}>
            <S.Icon>
                <FontAwesomeIcon icon={icon} size="4x"/>
            </S.Icon>
            <h4>{title}</h4>
            <p>{text}</p>
        </S.SelectGameCard>
    )
}

export default SelectGameCard
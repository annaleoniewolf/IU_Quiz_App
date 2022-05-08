import * as S from './styles'

const Card = ({children, size = "normal"}) => {
    return (
        <S.Card size={size}>
            {children}
        </S.Card>
    )
}

export default Card
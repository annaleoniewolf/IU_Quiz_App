import * as S from './styles'

const Button = ({ label, onClick, size = "normal", inactive = false, red}) => {
    return (
        <S.Button onClick={onClick} size={size} inactive={inactive} red={red}>
          {label}
        </S.Button>
    )
}

export default Button
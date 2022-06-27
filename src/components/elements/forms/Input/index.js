import * as S from './styles'



const Input = ({ type = "text", placeholder, name, label, required}) => {

    return (
        <S.Input>
            <S.Element>
                <input  type={type} placeholder={placeholder} name={name}  id={name} autoComplete="on"/>
                <label htmlFor={name}>{label}</label>
            </S.Element>
            
        </S.Input>
    )
}

export default Input
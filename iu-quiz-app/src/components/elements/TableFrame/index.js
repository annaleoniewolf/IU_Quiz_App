import * as S from './styles'

const TableFrame = ({children, title}) => {
    return (
        <S.TableFrame>
            <S.Title><h2>{title}</h2></S.Title>
            <S.Content>
                {children}
            </S.Content>
        </S.TableFrame>
    )
}

export default TableFrame
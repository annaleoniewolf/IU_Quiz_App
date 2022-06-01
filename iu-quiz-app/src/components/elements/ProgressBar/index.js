import * as S from './styles'

const ProgressBar = ({percentage}) => {

    return (
        <S.ProgressBar> 
            <S.Percentage percentage={percentage} />
        </S.ProgressBar>
    )
}

export default ProgressBar
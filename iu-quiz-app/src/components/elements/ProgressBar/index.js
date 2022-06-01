import * as S from './styles'

const ProgressBar = ({percentage}) => {
    console.log(percentage)
    return (
        <S.ProgressBar> 
            <S.Percentage percentage={percentage} />
        </S.ProgressBar>
    )
}

export default ProgressBar
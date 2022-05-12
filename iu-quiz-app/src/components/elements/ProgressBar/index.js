import * as S from './styles'
import ProgressBarModul from "@ramonak/react-progress-bar"

const ProgressBar = ({percentage}) => {
    return (
        <S.ProgressBar>
            <ProgressBarModul 
                completed={percentage}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label" 
                customLabel=""
            />
        </S.ProgressBar>
    )
}

export default ProgressBar
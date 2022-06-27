import * as S from './styles'
import { faChess} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SinglePlayerGameOverview = ({module}) => {
    return (
        <S.SinglePlayerGameOverview>
            <FontAwesomeIcon icon={faChess} size="3x" />
            <S.Content>
                <h5>Einzelspiel</h5>
                <p>{module}</p>
            </S.Content>
        </S.SinglePlayerGameOverview>
)
}

export default SinglePlayerGameOverview
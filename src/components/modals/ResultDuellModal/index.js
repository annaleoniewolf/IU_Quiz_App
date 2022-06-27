import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faFaceFrown, faDice} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const ResultDuellModal = () => {

    //TODO
    const [isWin] = useState(true)
    const [isTie] = useState(false)
    const [myPoints] = useState(10)
    const [opponentPoints] = useState(8)

    return (
        <S.ResultDuellModal>
            {isWin ?
                <S.Result>
                    <S.Icon>
                        <FontAwesomeIcon icon={faCrown} />
                    </S.Icon>
                    <h5>
                        Glückwunsch! Du hast diese Runde für dich entschieden!
                        <br />
                        {`Spielstand: ${myPoints}:${opponentPoints}`}
                    </h5>
                </S.Result>
            : 
                <S.Result>
                    <S.Icon>
                        <FontAwesomeIcon icon={faFaceFrown} />
                    </S.Icon>
                    <h5>
                        Schade! Die Runde hat dein Lernpartner für sich entschieden!
                        <br />
                        {`Spielstand: ${myPoints}:${opponentPoints}`}
                    </h5>
                </S.Result>
            }
            {isTie &&
                <S.Result>
                    <S.Icon>
                        <FontAwesomeIcon icon={faDice} />
                    </S.Icon>
                    <h5>
                        Unentschieden!
                        <br />
                        {`Spielstand: ${myPoints}:${opponentPoints}`}
                    </h5>
                </S.Result>
            }
           
        </S.ResultDuellModal>
    )
}

export default ResultDuellModal
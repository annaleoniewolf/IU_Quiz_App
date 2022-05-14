import * as S from './styles'
//import { useState } from 'react'
import GameOverview from './GameOverview'

const DuellMultiplayer = () => {

    //const [isLandingOpen] = useState(true)
    //const [isQuestionOpen] = useState(false)
    
    return (
        <S.DuellMultiplayer>
            <S.Content>
                <GameOverview />
            </S.Content>
        </S.DuellMultiplayer>
    )
}

export default DuellMultiplayer
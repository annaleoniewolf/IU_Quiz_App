import * as S from './styles'
import LandingTable from './LandingTable'
import { useState } from 'react'
import QuestionRound from './QuestionRound'

//Block Komponente für den Einzelspielermodus
const SinglePlayer = () => {

    //Teplate for einzelspieler objekt -> Modus zieht Fragen aus öffentlichen Fragenkatalog der API, 
    //merkt sich aber den Fortschritt im Einzelspielermodus nur lokal

    const [isLandingOpen] = useState(false)
    const [isQuestionOpen] = useState(true)
    
    return (
        <S.SinglePlayer>
            <S.Content>
                {isLandingOpen && <LandingTable />}
                {isQuestionOpen && <QuestionRound />}
            </S.Content>
        </S.SinglePlayer>
    )
}

export default SinglePlayer
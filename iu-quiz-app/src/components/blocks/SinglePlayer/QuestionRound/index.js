import * as S from './styles'
import TableFrame from '../../../elements/TableFrame'
import Button from '../../../elements/forms/Button'
import ProgressBar from '../../../elements/ProgressBar'

const QuestionRound = () => {


    return (
        <S.QuestionRound>
            <TableFrame>
                <S.Content>
                    <S.Progress> 2 / 10</S.Progress>
                    <S.ProgressBar>
                        <ProgressBar percentage={30}/>
                    </S.ProgressBar>
                    <h4>Aus wie vielen zentralen Komponenten besteht die Von-Neumann-Architektur?</h4>
                    <S.Questions>
                        <S.Question>
                            <p>Arithmetric Logic Unit (ALU), Memory Management Unit (MMU), Translation Lookaside Buffer (TLB), Cache</p>
                        </S.Question>
                        <S.Question>
                            <p>Arithmetric Logic Unit (ALU), Memory Management Unit (MMU), Translation Lookaside Buffer (TLB), Cache</p>
                        </S.Question>
                        <S.Question>
                            <p>Prozessor, Hauptspeicher, Ein- /Ausgabe, Kommunikation</p>
                        </S.Question>
                        <S.Question>
                            <p>Steuerwerk, Rechenwerk, Leitwerk, Netzwerk</p>
                        </S.Question>
                    </S.Questions>
                    <Button label="Weiter" />
                </S.Content>
            </TableFrame>
        </S.QuestionRound>
    )
}

export default QuestionRound
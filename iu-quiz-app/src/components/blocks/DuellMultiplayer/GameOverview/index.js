import * as S from './styles'
import TableFrame from '../../../elements/TableFrame'
import UserOverview from '../../../elements/UserOverview'
import Button from '../../../elements/forms/Button'

const GameOverview = () => {
    const answersPlayerA = [
        {id: "1", status: "right"},
        {id: "2", status: "right"},
        {id: "3", status: "false"},
        {id: "4", status: "right"},
        {id: "5", status: "right"},
        {id: "6", status: "right"},
        {id: "7", status: "right"},
        {id: "8", status: "right"},
        {id: "9", status: "right"},
        {id: "10", status: "none"},
        {id: "11", status: "none"},
        {id: "12", status: "none"},
    ]
    const answersPlayerB = [
        {id: "1", status: "right"},
        {id: "2", status: "right"},
        {id: "3", status: "false"},
        {id: "4", status: "right"},
        {id: "5", status: "false"},
        {id: "6", status: "right"},
        {id: "7", status: "right"},
        {id: "8", status: "false"},
        {id: "9", status: "right"},
        {id: "10", status: "none"},
        {id: "11", status: "none"},
        {id: "12", status: "none"},
    ]
    return (
        <S.GameOverview>
            <TableFrame title="Spielverlauf">
                <S.Content>
                    <h1>6 : 7</h1>
                    <p>Betriebssysteme, Rechennetze und verteilte Systeme</p>
                    <S.Frames>
                        <S.Frame>
                            <UserOverview userName="Anna" />
                            <S.AnswersOverview>
                                {answersPlayerA &&
                                    answersPlayerA.map(({ status }, index) => {
                                        return (
                                            <S.Answer key={index} status={status} />
                                        )
                                    })
                                }
                            </S.AnswersOverview>
                        </S.Frame>
                        <S.Frame>
                            <UserOverview userName="Annika" />
                            <S.AnswersOverview>
                                {answersPlayerB &&
                                    answersPlayerB.map(({ status }, index) => {
                                        return (
                                            <S.Answer key={index} status={status} />
                                        )
                                    })
                                }
                            </S.AnswersOverview>
                        </S.Frame>
                    </S.Frames>
                    <S.Buttons>
                        <Button label="Spielen" />
                        <Button label="Aufgeben" red/>
                    </S.Buttons>
                </S.Content>
            </TableFrame>
        </S.GameOverview>
    )
}

export default GameOverview
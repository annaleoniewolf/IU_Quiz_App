import * as S from './styles'

import UserOverview from '../../../elements/UserOverview'
import Button from '../../../elements/forms/Button'

import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'

import { useQuery } from "@apollo/client"
import GET_GAME_BY_ID from '../../../../apollo/queries/getGameById'


const GameOverview = () => {

    const activeGame = localStorage.getItem("activeGame")
    console.log("activeGame", activeGame)

    //getGameById Query
    const { data: game } = useQuery(GET_GAME_BY_ID, {
        variables: {
            game_uuid: activeGame
        }
    });   
    console.log(game)


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

    //Modals
    const { setOpen, setType} = useContext(ModalContext)
    //--Fragen Modal
    const handleQuestionRoundDuell = () => {
        setType("QuestionRoundDuell")
        setOpen(true)
    }
    //--Beenden Modal
    const handleStopModal = () => {
        setType("StopDuell")
        setOpen(true)
    }

    return (
        <S.GameOverview>
            {game &&
                <S.Content>
                    <h1>6 : 7</h1>
                    <p>{game.getGameById.module.name}</p>
                    <S.Frames>
                        <S.Frame>
                            <UserOverview 
                                userName={`${game.getGameById.user_sent_by.first_name} ${game.getGameById.user_sent_by.last_name}`} 
                                info={game.getGameById.user_sent_by.degree}
                                image={game.getGameById.user_sent_by.avatar_url} 
                            />
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
                            <UserOverview 
                                userName={`${game.getGameById.user_sent_to.first_name} ${game.getGameById.user_sent_to.last_name}`} 
                                info={game.getGameById.user_sent_to.degree}
                                image={game.getGameById.user_sent_to.avatar_url} 
                            />
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
                        <Button label="Spielen" onClick={() => handleQuestionRoundDuell()} />
                        <Button label="Beenden" onClick={() => handleStopModal()} />
                    </S.Buttons>
                </S.Content>
            }
        </S.GameOverview>
    )
}

export default GameOverview
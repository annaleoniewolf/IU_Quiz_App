import * as S from './styles'

import UserOverview from '../../../elements/UserOverview'
import Button from '../../../elements/forms/Button'

import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChess } from '@fortawesome/free-solid-svg-icons'

import { useQuery } from "@apollo/client"
import GET_GAME_BY_ID from '../../../../apollo/queries/getGameById'
import GET_QUESTIONS_FOR_GAME from '../../../../apollo/queries/getQuestionsForGame'
import GET_MY_PROFILE from '../../../../apollo/queries/getMyProfile'
import GET_PAST_GAMES from '../../../../apollo/queries/getPastGames'


const GameOverview = () => {

    const activeGame = localStorage.getItem("activeGame")

    //getGameById Query
    const { data: game } = useQuery(GET_GAME_BY_ID, {
        variables: {
            game_uuid: activeGame
        }
    });   

    //getQuestionsForGame Query
    const { data: gameQuestions } = useQuery(GET_QUESTIONS_FOR_GAME, {
        variables: {
            game_uuid: activeGame
        }
    }); 

    //getGameById Query
    const { data: pastGames } = useQuery(GET_PAST_GAMES)  
    console.log(pastGames)

    const getGameResult = () => {
        if (pastGames) {
            for (let pastGame of pastGames.getPastGames) {
                if (pastGame.uuid === activeGame) {
                    return (
                        <S.Result>
                            <S.Icon>
                                <FontAwesomeIcon icon={faChess} />
                            </S.Icon>
                            <S.Users>
                                <S.User>
                                    <S.ProfileImage>
                                        <img src={pastGame.winner.avatar_url} alt="userimage" />
                                    </S.ProfileImage>
                                    <h5>Gewonnen hat: {pastGame.winner.first_name} {pastGame.winner.last_name}</h5>
                                </S.User>
                                <S.VerticalLine />
                                <S.User>
                                    <S.ProfileImage>
                                        <img src={pastGame.loser.avatar_url} alt="userimage" />
                                    </S.ProfileImage>
                                    <h5>Verloren hat: {pastGame.loser.first_name} {pastGame.loser.last_name}</h5>
                                </S.User>
                            </S.Users>
                        </S.Result>
                    )
                }
            
        }}
    }

    //getMyProfile Query
    const { data: profile } = useQuery(GET_MY_PROFILE)

    //generates renderd answers for player a
    const playerAAnswers = () => {
        let answeredQuestions = []
        let status = 'none'
        let label = 0
        if (gameQuestions) {
            for (let gameQuestion of gameQuestions.getQuestionsForGame) {
                if (gameQuestion.is_played_by_user_a === false) {
                    status = null
                } else if (gameQuestion.is_played_by_user_a === true && gameQuestion.is_user_a_answer_correct === true) {
                    status = true
                } else status = false
                answeredQuestions.push({ label: label, status: status })
                label++
            }
            while (answeredQuestions.length < 12) {
                answeredQuestions.push({label: label, status: null})
                label++
            }
        }
        return answeredQuestions
    }

    //generates renderd answers for player a
    const playerBAnswers = () => {
        let answeredQuestions = []
        let status = 'none'
        let label = 0
        if (gameQuestions) {
            for (let gameQuestion of gameQuestions.getQuestionsForGame) {
                if (gameQuestion.is_played_by_user_b === false) {
                    status = null
                } else if (gameQuestion.is_played_by_user_b === true && gameQuestion.is_user_b_answer_correct === true) {
                    status = true
                } else status = false
                answeredQuestions.push({ label: label, status: status })
                label++
            }
            while (answeredQuestions.length < 12) {
                answeredQuestions.push({label: label, status: null})
                label++
            }
        }
        return answeredQuestions
    }

    //counts points for player a
    const playerAPoints = () => {
        let points = 0
        if (gameQuestions) {
            for (let gameQuestion of gameQuestions.getQuestionsForGame) {
                //if question if player and correct answered increment points
                if(gameQuestion.is_played_by_user_a === true && gameQuestion.is_user_a_answer_correct === true) 
                    points++
            }
        }
        return points
    }

    //counts points for player a
    const playerBPoints = () => {
        let points = 0
        if (gameQuestions) {
            for (let gameQuestion of gameQuestions.getQuestionsForGame) {
                //if question if player and correct answered increment points
                if(gameQuestion.is_played_by_user_b === true && gameQuestion.is_user_b_answer_correct === true) 
                    points++
            }
        }
        return points
    }

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
            {game ?
                <S.Content>
                    <h1>{playerAPoints()} : {playerBPoints()}</h1>
                    <p>{game.getGameById.module.name}</p>
                    <S.Frames>
                        <S.Frame>
                            <UserOverview 
                                userName={`${game.getGameById.user_sent_by.first_name} ${game.getGameById.user_sent_by.last_name}`} 
                                info={game.getGameById.user_sent_by.degree}
                                image={game.getGameById.user_sent_by.avatar_url} 
                            />
                            <S.AnswersOverview>
                                { playerAAnswers().map(({ status }, index) => {
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
                                { playerBAnswers().map(({ status }, index) => {
                                        return (
                                            <S.Answer key={index} status={status} />
                                        )
                                    })
                                }
                            </S.AnswersOverview>
                        </S.Frame>
                    </S.Frames>
                    <S.Buttons>
                        {(game.getGameById.current_player.uuid === profile?.getMyProfile.uuid && game?.getGameById.is_game_over === false) &&
                            <Button label="Spielen" onClick={() => handleQuestionRoundDuell()} />
                        }
                        <Button label="Beenden" onClick={() => handleStopModal()} />
                    </S.Buttons>
                </S.Content>
            : 
                <S.Content>
                    {getGameResult()}
                </S.Content>
            }
        </S.GameOverview>
    )
}

export default GameOverview
import { faChess, faBookOpen, faUserGroup, faComments } from '@fortawesome/free-solid-svg-icons'

import NavigationCard from "../../elements/NavigationCard"
import Card from '../../elements/Card'
import UserOverview from '../../elements/UserOverview'
import CakeChart from '../../elements/CakeChart'
import Button from '../../elements/forms/Button'
import SinglePlayerGameOverview from '../../elements/SinglePlayerGameOverview'

import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import GET_MY_PROFILE from '../../../apollo/queries/getMyProfile'


import * as S from './styles'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {

    const { activeGame, module } = useSelector((state) => state.singlePlayerGame)

    //getMyProfile Query
    const { data: profileData } = useQuery(GET_MY_PROFILE);  
    
    const calculatePercentage = (per) => {
        if (per == null) {
            return 0
        } else {
            return per*100
        }
    }

    return (
        <S.Dashboard>
            <S.Container>
                <S.NavigationCards>
                    <NavigationCard 
                        icon={faChess} 
                        title="Neues Spiel"
                        text="Lerne spielerisch! Du kannst online gegen Freunde spielen oder alleine üben."
                        label="Spiel Starten"
                        modal="NewGame"
                    />
                    <NavigationCard 
                        icon={faBookOpen} 
                        title="Fragenkatalog"
                        text="Helfe dabei unseren Fragenkatalog zu verbessern."
                        label="Katalog"
                        link="/fragenkatalog"
                    />
                    <NavigationCard 
                        icon={faUserGroup} 
                        title="Freunde"
                        text="Lerne neue Freunde kennen, mit denen du zusammen lernen kannst."
                        label="Freunde"
                        link="/freunde"
                    />
                    <NavigationCard 
                        icon={faComments} 
                        title="Chat"
                        text="Tausche dich mit anderen Kommilitonen aus!"
                        label="Chat"
                        link="/chat"
                    />
                </S.NavigationCards>

                <S.Overview>
                    {profileData &&
                        <Card size="small">
                            <S.CardContainer>
                                <h4>Statistik</h4>
                                <S.Amounts>
                                    <p>Gespielte Spiele: {profileData.getMyProfile.stats.total_games} Anzahl der beantworteten Fragen: {profileData.getMyProfile.stats.total_questions}</p>
                                </S.Amounts>
                                <S.CakeCharts>
                                    <S.CakeChart>
                                        <CakeChart percentage={calculatePercentage(profileData.getMyProfile.stats.wins_percentage)} />
                                        <p>Du hast {calculatePercentage(profileData.getMyProfile.stats.correct_answer_percentage)} der Fragen im Duell richtig beantwortet.</p>
                                    </S.CakeChart>
                                    <S.VerticalLine />
                                    <S.CakeChart>
                                        <CakeChart percentage={calculatePercentage(profileData.getMyProfile.stats.wins_percentage)} />
                                        <p>Du hast {calculatePercentage(profileData.getMyProfile.stats.wins_percentage)} der Duelle gewonnen.</p>
                                    </S.CakeChart>
                                </S.CakeCharts>
                            </S.CardContainer>
                        </Card>
                    }
                    <Card size="large">
                        <S.CardContainer>
                            <h4> Laufende Spiele</h4>
                            {activeGame === true &&
                                <>
                                    <S.SinglePlayOverview>
                                        <SinglePlayerGameOverview module={module} />
                                        <NavLink to="/einzelspieler">
                                            <Button label="Spielen" size="small" />
                                        </NavLink>
                                    </S.SinglePlayOverview>
                                    <hr/>
                                </>
                            }
                            <S.GameOverview>
                                <UserOverview
                                    userName="Annika"
                                    module="Betriebssysteme, Rechennetze und verteilte Systeme"
                                />
                                <Button size="small" label="Spielen" />
                            </S.GameOverview>
                            <hr />
                        </S.CardContainer>
                    </Card>
                </S.Overview>
            </S.Container>

           
        </S.Dashboard>
    )
}

export default Dashboard
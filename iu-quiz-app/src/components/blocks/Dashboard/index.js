import { faChess, faBookOpen, faUserGroup, faComments } from '@fortawesome/free-solid-svg-icons'

import NavigationCard from "../../elements/NavigationCard"
import Card from '../../elements/Card'
import UserOverview from '../../elements/UserOverview'
import CakeChart from '../../elements/CakeChart'
import Button from '../../elements/forms/Button'
import SinglePlayerGameOverview from '../../elements/SinglePlayerGameOverview'

import * as S from './styles'

const Dashboard = () => {
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
                    <Card size="small">
                        <S.CardContainer>
                            <h4>Statistik</h4>
                            <S.CakeCharts>
                                <S.CakeChart>
                                    <CakeChart percentage={80} />
                                    <p>Du hast 80% der Fragen im Duell richtig beantwortet.</p>
                                </S.CakeChart>
                                <S.VerticalLine />
                                <S.CakeChart>
                                    <CakeChart percentage={55} />
                                    <p>Du hast 55% der Duelle gewonnen.</p>
                                </S.CakeChart>
                            </S.CakeCharts>
                        </S.CardContainer>
                    </Card>
                    <Card size="large">
                        <S.CardContainer>
                            <h4>Spiele</h4>
                            <S.SinglePlayOverview>
                                <SinglePlayerGameOverview module="Spezifikation" />
                                <Button label="Spielen" size="small" />
                            </S.SinglePlayOverview>
                            <hr/>
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
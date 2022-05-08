import { faChess, faBookOpen, faUserGroup, faComments } from '@fortawesome/free-solid-svg-icons'


import NavigationCard from "../../elements/NavigationCard"
import Card from '../../elements/Card'
import UserOverview from '../../elements/UserOverview'


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
                        <h4>Statistik</h4>
                    </Card>
                    <Card size="large">
                        <S.CardContainer>
                            <h4>Spiele</h4>
                            <UserOverview
                                userName="Annika"
                                module="Betriebssysteme, Rechennetze und verteilte Systeme"
                            />
                            <hr/>
                            <UserOverview
                                userName="Thomas"
                                module="Spezifikation"
                            />
                        </S.CardContainer>
                    </Card>
                </S.Overview>
            </S.Container>

           
        </S.Dashboard>
    )
}

export default Dashboard
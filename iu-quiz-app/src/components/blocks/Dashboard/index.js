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
                        text="Lerne spielerisch! Entweder einzeln, mit deinen Freunden zusammen oder gegeneinander in einem spannenden Duell!"
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
                        text="Setze dich mit deinen Kommilitonen in Verbindung und lade neue Freunde ein."
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
                    <Card>
                        <S.CardContainer>
                            <h4>Offene Duelle</h4>
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
                    <Card>
                        <h4>Durchschnittlich Hast Du</h4>
                    </Card>
                </S.Overview>
            </S.Container>

           
        </S.Dashboard>
    )
}

export default Dashboard
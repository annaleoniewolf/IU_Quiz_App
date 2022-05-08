import { NavLink } from 'react-router-dom'
import UserOverview from '../../elements/UserOverview'

import * as S from './styles'

const Navigation = () => {
    return (
        <S.Navigation>
            <NavLink to={'/'}>
                <h1>IU Quiz APP</h1>
            </NavLink>
            <S.Container>
                <NavLink to={'/profil'}>
                    <UserOverview />
                </NavLink>
                <p>Abmelden</p>
            </S.Container>
        </S.Navigation>
    )
}

export default Navigation
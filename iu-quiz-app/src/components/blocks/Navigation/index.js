import { NavLink } from 'react-router-dom'
import UserOverview from '../../elements/UserOverview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

const Navigation = () => {
    return (
        <S.Navigation>
            <NavLink to={'/'}>
                <h1>IU Quiz APP</h1>
            </NavLink>
            <S.Container>
                <S.Icon>
                    <FontAwesomeIcon icon={faComments} />
                </S.Icon>
                <NavLink to={'/profil'}>
                    <UserOverview />
                </NavLink>
                <p>Abmelden</p>
            </S.Container>
        </S.Navigation>
    )
}

export default Navigation
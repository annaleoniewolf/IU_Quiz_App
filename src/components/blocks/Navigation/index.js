import * as S from './styles'

import { NavLink } from 'react-router-dom'
import UserOverview from '../../elements/UserOverview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { ModalContext } from '../../../context/ModalContext'
import { useContext } from 'react'

import GET_MY_PROFILE from '../../../apollo/queries/getMyProfile'
import { useQuery } from "@apollo/client"

const Navigation = () => {

    //getMyProfile Query
    const { data } = useQuery(GET_MY_PROFILE);  


    //logout Modal
    const { setOpen, setType} = useContext(ModalContext)

    const openLogoutModal = () => {
        setType("Logout")
        setOpen(true)
    }

    return (
        <S.Navigation>
            <S.Content>
                <NavLink to={'/'}>
                    <h1>IU Quiz APP</h1>
                </NavLink>
                <S.Container>
                    <S.Icon>
                        <FontAwesomeIcon icon={faComments} />
                    </S.Icon>
                    <NavLink to={'/profil'}>
                        <UserOverview 
                            image={data?.getMyProfile.avatar_url}
                        />
                    </NavLink>
                    <S.Logout onClick={() => {openLogoutModal()}}>
                        <p>Abmelden</p>
                    </S.Logout>
                </S.Container>
            </S.Content>
        </S.Navigation>
    )
}

export default Navigation
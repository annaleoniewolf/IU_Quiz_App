import * as S from './styles'
import TableFrame from '../../elements/TableFrame'

import MyProfile from './MyProfile'


const Profile = () => {

    return (
        <S.Profile>
            <S.Content>
                <TableFrame activeId={0} labels={["Profil"]} >
                    <MyProfile />
                </TableFrame>
            </S.Content>
        </S.Profile>
    )
}

export default Profile


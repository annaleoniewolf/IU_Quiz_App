import * as S from './styles'
import TableFrame from '../../elements/TableFrame'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPanelIndex } from'../../../redux/settingsSlice'

import MyProfile from './MyProfile'


const Profile = () => {

    const dispatch = useDispatch()
	const { selectedPanelIndex } = useSelector((state) => state.settings)
   
    return (
        <S.Profile>
            <S.Content>
                <TableFrame 
                        activeId={selectedPanelIndex}
                        labels={["Profil bearbeiten"]} 
                        onChange={(index) => {
                            dispatch(setSelectedPanelIndex(index))
                        }}
                    >
                        {selectedPanelIndex === 0 && <MyProfile />}
                    </TableFrame>
            </S.Content>
        </S.Profile>
    )
}

export default Profile


import * as S from './styles'
import TableFrame from '../../elements/TableFrame'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPanelIndex } from'../../../redux/settingsSlice'

import MyFriends from './MyFriends'
import AddFriend from './AddFriend'
import BlockedFriends from './BlockedFriends'
import PendingFriends from './PendingFriends'

const Friends = () => {

    const dispatch = useDispatch()
	const { selectedPanelIndex } = useSelector((state) => state.settings)
   
    return (
        <S.Friends>
            <S.Content>
                <TableFrame 
                        activeId={selectedPanelIndex}
                        labels={["Freunde", "Ausstehend", "Blockiert"]} 
                        button="Freund hinzufügen"
                        onChange={(index) => {
                            dispatch(setSelectedPanelIndex(index))
                        }}
                    >
                        {selectedPanelIndex === 0 && <MyFriends />}
                        {selectedPanelIndex === 1 && <PendingFriends />}
                        {selectedPanelIndex === 2 && <BlockedFriends />}
                        {selectedPanelIndex === 3 && <AddFriend />}
                    </TableFrame>
            </S.Content>
        </S.Friends>
    )
}

export default Friends


import * as S from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPanelIndex } from'../../../redux/settingsSlice'

import TableFrame from '../../elements/TableFrame'
import LandingTable from './LandingTable'


const SinglePlayer = () => {

    const dispatch = useDispatch()
	const { selectedPanelIndex } = useSelector((state) => state.settings)

    return (
        <S.SinglePlayer>
            <S.Content>
                <TableFrame 
                    activeId={selectedPanelIndex}
                    labels={["Fragenübersicht"]} 
                    onChange={(index) => {
                        dispatch(setSelectedPanelIndex(index))
                    }}
                >
                    {selectedPanelIndex === 0 && <LandingTable />}
                </TableFrame>

            </S.Content>
        </S.SinglePlayer>
    )
}

export default SinglePlayer
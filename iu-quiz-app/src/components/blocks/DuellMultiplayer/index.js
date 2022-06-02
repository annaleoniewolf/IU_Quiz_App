import * as S from './styles'
//import { useState } from 'react'

import GameOverview from './GameOverview'

import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPanelIndex } from'../../../redux/settingsSlice'

import TableFrame from '../../elements/TableFrame'

const DuellMultiplayer = () => {

    const dispatch = useDispatch()
    const { selectedPanelIndex } = useSelector((state) => state.settings)

    return (
        <S.DuellMultiplayer>
            <S.Content>
                <TableFrame 
                    activeId={selectedPanelIndex}
                    labels={["Rundenübersicht"]} 
                    onChange={(index) => {
                        dispatch(setSelectedPanelIndex(index))
                    }}
                >
                    {selectedPanelIndex === 0 && <GameOverview />}
                </TableFrame>
            </S.Content>
        </S.DuellMultiplayer>
    )
}

export default DuellMultiplayer
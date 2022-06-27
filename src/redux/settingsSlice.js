import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedPanelIndex: 0
}

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setSelectedPanelIndex: (state, action) => {
			state.selectedPanelIndex = action.payload
		}
	}
})

export const {
	selectedPanelIndex,
	setSelectedPanelIndex,
} = settingsSlice.actions

export default settingsSlice.reducer

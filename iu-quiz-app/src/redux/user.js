import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoggedIn : false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsLoggedIn: (state, action) => {
			state.selectedPanelIndex = action.payload
		}
	}
})

export const {
	isLoggedIn,
	setIsLoggedIn,
} = userSlice.actions

export default userSlice.reducer

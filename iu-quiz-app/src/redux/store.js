
import { configureStore } from '@reduxjs/toolkit'
import singlePlayerGameReducer from './singlePlayerGame'
import settingsReducer from './settingsSlice'
import userReducer from './user'

export default configureStore({
  reducer: {
      singlePlayerGame: singlePlayerGameReducer,
      settings: settingsReducer,
      user: userReducer
  },
})

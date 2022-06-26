
import { configureStore } from '@reduxjs/toolkit'
import singlePlayerGameReducer from './singlePlayerGame'
import settingsReducer from './settingsSlice'
import userReducer from './user'
import authReducer from './authSlice'

export default configureStore({
  reducer: {
      singlePlayerGame: singlePlayerGameReducer,
      settings: settingsReducer,
      user: userReducer,
      auth: authReducer
  },
})

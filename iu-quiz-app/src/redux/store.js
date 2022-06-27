
import { configureStore } from '@reduxjs/toolkit'
import singlePlayerGameReducer from './singlePlayerGame'
import settingsReducer from './settingsSlice'

export default configureStore({
  reducer: {
      singlePlayerGame: singlePlayerGameReducer,
      settings: settingsReducer
  },
})

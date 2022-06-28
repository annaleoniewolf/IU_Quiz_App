
import { configureStore } from '@reduxjs/toolkit'
import singlePlayerGameReducer from './singlePlayerGame'
import settingsReducer from './settingsSlice'
import questionSlice from './questionSlice'

export default configureStore({
  reducer: {
      singlePlayerGame: singlePlayerGameReducer,
      settings: settingsReducer,
      question: questionSlice
  },
})

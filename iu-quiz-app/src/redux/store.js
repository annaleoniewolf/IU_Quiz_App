
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import singlePlayerGameReducer from './singlePlayerGame'
import settingsRuducer from './settingsSlice'

export default configureStore({
  reducer: {
      counter: counterReducer,
      singlePlayerGame: singlePlayerGameReducer,
      settings: settingsRuducer
  },
})

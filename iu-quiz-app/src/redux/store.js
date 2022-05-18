
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import singlePlayerGameReducer from './singlePlayerGame'

export default configureStore({
  reducer: {
      counter: counterReducer,
      singlePlayerGame: singlePlayerGameReducer
  },
})

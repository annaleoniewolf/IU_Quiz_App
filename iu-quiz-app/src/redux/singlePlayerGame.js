import { createSlice } from '@reduxjs/toolkit'

export const singlePlayerGameSlice = createSlice({
  name: 'singlePlayerGame',
  initialState: {
    module: '',
    questions: {},
    currentQuestion: 0,
    activeGame: false
  },
  reducers: {
    //Modul
    setModule: (state) => {

    },
    clearModule: (state) => {
      state.module = ''
    },

    //Fragen
    setQuestions: (state) => {
      
    },
    clearQuestions: (state) => {
      state.questions = ''
    },

    setCurrentQuestion: (state) => {
      
    },
    activeGame: (state, action) => {

    },
    setActiveGame: (state, action) => {
      state.activeGame = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModule, clearModule, setQuestions, clearQuestions, setCurrentQuestion, setActiveGame } = singlePlayerGameSlice.actions

export default singlePlayerGameSlice.reducer
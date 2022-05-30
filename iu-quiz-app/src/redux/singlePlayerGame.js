import { createSlice } from '@reduxjs/toolkit'

export const singlePlayerGameSlice = createSlice({
  name: 'singlePlayerGame',
  initialState: {
    module: '',
    questions: {},
    currentQuestion: 0,
    activeGame: false,

  },
  reducers: {

    //Modulauswahl
    setModule: (state, action) => {
      state.module = action.payload
    },
    //Löscht Modul
    clearModule: (state) => {
      state.module = ''
    },

    //Fragen
    setQuestions: (state, action) => {
      state.questions = action.payload
    },
    //Löscht Fragen
    clearQuestions: (state) => {
      state.questions = {}
    },
    //Aktuelle Frage
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload
    },

    //Gibt es ein laufendes Spiel?
    setActiveGame: (state, action) => {
      state.activeGame = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModule, clearModule, setQuestions, clearQuestions, setCurrentQuestion, activeGame, setActiveGame } = singlePlayerGameSlice.actions

export default singlePlayerGameSlice.reducer
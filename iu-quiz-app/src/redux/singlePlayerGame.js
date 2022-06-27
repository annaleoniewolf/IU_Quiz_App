import { createSlice } from '@reduxjs/toolkit'

export const singlePlayerGameSlice = createSlice({
  name: 'singlePlayerGame',
  initialState: {
    module: '',
    questions: [],
    currentQuestion: 0,
    activeGame: false,
    selectedQuestions: []

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
    //Fügt ausgewählte Frage selectedQuestions hinzu
    setSelectedQuestions: (state, action) => {
      state.selectedQuestions.push(action.payload)
    },
    clearSelectedQuestions: (state) => {
      state.selectedQuestions = []
    },
    //Löscht Fragen
    clearQuestions: (state) => {
      state.questions = []
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
export const { setModule, setQuestionsSelectedAnswer, clearSelectedQuestions, clearModule, setQuestions, setSelectedQuestions, clearQuestions, setCurrentQuestion, activeGame, setActiveGame } = singlePlayerGameSlice.actions

export default singlePlayerGameSlice.reducer
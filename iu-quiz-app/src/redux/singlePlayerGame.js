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

    /*//updatet selectedAnswer
    setQuestionsSelectedAnswer: (state, action) => {

      const {currentQuestion, selected} = action.payload

      //findet Index von dem Element, welches geupdatet werden soll
      //const index = state.questions.findIndex(questions.id !== action.payload)

      //legt vorrübergehend neues Array an
      const newArray = [...state.questions]
      newArray[currentQuestion].selectedAnswer = selected

      state.questions = newArray
    },*/

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
export const { setModule, setQuestionsSelectedAnswer, clearModule, setQuestions, clearQuestions, setCurrentQuestion, activeGame, setActiveGame } = singlePlayerGameSlice.actions

export default singlePlayerGameSlice.reducer
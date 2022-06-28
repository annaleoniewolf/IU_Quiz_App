import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
    name: 'questionSlice',
    initialState: {
        questionId: ''
    },
    reducers: {
        //Modulauswahl
        setQuestionId: (state, action) => {
        state.questionId = action.payload
        },
        //Löscht Modul
        clearQuestionId: (state) => {
        state.questionId = ''
        },
    }
})

// Action creators are generated for each case reducer function
export const { setQuestionId, clearQuestionId, questionId } = questionSlice.actions

export default questionSlice.reducer
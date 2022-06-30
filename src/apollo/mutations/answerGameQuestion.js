import gql from 'graphql-tag'

const ANSWER_GAME_QUESTION = gql`
	mutation answerGameQuestion($answerGameQuestionInput:  AnswerGameQuestionInput!) {
		answerGameQuestion(answerGameQuestionInput: $answerGameQuestionInput) {
			default {
				success
				message
				data
			}
		}
	}
`

export default ANSWER_GAME_QUESTION

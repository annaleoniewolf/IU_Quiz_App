import gql from 'graphql-tag'

const ADD_QUESTION = gql`
	mutation addQuestion($addQuestionInput: AddQuestionInput!) {
		addQuestion(addQuestionInput: $addQuestionInput) {
			default {
				success
				message
				data
			}
		}
	}
`

export default ADD_QUESTION

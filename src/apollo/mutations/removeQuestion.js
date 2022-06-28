import gql from 'graphql-tag'

const REMOVE_QUESTION = gql`
	mutation removeQuestion($question_uuid: UUID) {
		removeQuestion(question_uuid: $question_uuid) {
			default {
				success
				message
				data
			}
		}
	}
`

export default REMOVE_QUESTION

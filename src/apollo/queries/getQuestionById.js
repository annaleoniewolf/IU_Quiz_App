import gql from 'graphql-tag'

const GET_QUESTION_BY_ID= gql`
  query GetQuestionById($question_uuid: UUID) {
    getQuestionById(question_uuid: $question_uuid) {
        uuid
        question
        explanation
        answer_a
        answer_b
        answer_c
        answer_d
        correct_answer
        module {
            name
        }
    }
  }
`

export default GET_QUESTION_BY_ID

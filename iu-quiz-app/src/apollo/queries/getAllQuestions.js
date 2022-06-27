import gql from 'graphql-tag'

const GET_ALL_QUESTIONS = gql`
  query GetAllQuestions($filter: GetAllQuestionsFilterInput!) {
    getAllQuestions(filter: $filter) {
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
        author {
            uuid
        }
    }
  }
`

export default GET_ALL_QUESTIONS

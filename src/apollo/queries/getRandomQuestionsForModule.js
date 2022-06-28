import gql from 'graphql-tag'

const GET_RANDOM_QUESTIONS_FOR_MODULE = gql`
  query GetRandomQuestionsForModule($filter: GetRandomQuestionsForModuleFilterInput!) {
    getRandomQuestionsForModule(filter: $filter) {
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

export default GET_RANDOM_QUESTIONS_FOR_MODULE

import gql from 'graphql-tag'

const GET_QUESTIONS_FOR_GAME = gql`
  query GetGameById($game_uuid: UUID!) {
    getGameById(game_uuid: $game_uuid) {
        uuid
        is_user_a_answer_correct
        is_user_b_answer_correct
        question {
            uuid
            question
            answer_a
            answer_b
            answer_c
            answer_d
        }

    }
  }
`

export default GET_QUESTIONS_FOR_GAME

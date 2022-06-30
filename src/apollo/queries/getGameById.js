import gql from 'graphql-tag'

const GET_GAME_BY_ID = gql`
  query GetGameById($game_uuid: UUID!) {
    getGameById(game_uuid: $game_uuid) {
        turn
        is_game_over
        module {
          name
        }
        winner {
            uuid
        }
        loser {
          uuid
        }
        user_sent_by {
            first_name
            last_name
            avatar_url
            degree
        }
        user_sent_to {
            first_name
            last_name
            avatar_url
            degree
        }
        current_player {
          uuid
        }
    }
  }
`

export default GET_GAME_BY_ID

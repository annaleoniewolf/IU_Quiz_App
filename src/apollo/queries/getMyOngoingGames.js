import gql from 'graphql-tag'

const GET_MY_ONGOING_GAMES = gql`
  query GetMyOngoingGames {
    getMyOngoingGames {
      uuid
      turn
      module {
        uuid
        name
      }
      user_sent_by {
        uuid
        first_name
        last_name
        avatar_url
      }
      user_sent_to {
        uuid
        first_name
        last_name
        avatar_url
      }
      current_player {
        uuid
      }
    }
  }
`

export default GET_MY_ONGOING_GAMES

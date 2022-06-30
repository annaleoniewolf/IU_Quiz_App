import gql from 'graphql-tag'

const GET_PAST_GAME = gql`
  query GetPastGames {
    getPastGames {
      uuid
      winner {
        uuid
        first_name
        last_name
        avatar_url
      }
      loser {
        uuid
        first_name
        last_name
        avatar_url
      }
    }
  }
`

export default GET_PAST_GAME

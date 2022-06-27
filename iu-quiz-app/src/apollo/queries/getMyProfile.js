import gql from 'graphql-tag'

const GET_MY_PROFILE = gql`
  query GetMyProfile {
    getMyProfile {
        first_name
        last_name
        degree
        study_start
        avatar_url
    }
  }
`

export default GET_MY_PROFILE

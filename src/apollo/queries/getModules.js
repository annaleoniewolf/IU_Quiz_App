import gql from 'graphql-tag'

const GET_MODULES = gql`
  query GetModules {
    getModules {
      uuid
      name
    }
  }
`

export default GET_MODULES

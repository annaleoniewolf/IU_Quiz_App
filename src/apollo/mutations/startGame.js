import gql from 'graphql-tag'

const START_GAME = gql`
	mutation startGame($startGameInput: StartGameInput!) {
		startGame(startGameInput: $startGameInput) {
			default {
				success
				message
				data
			}
            game {
                uuid
            }
		}
	}
`

export default START_GAME

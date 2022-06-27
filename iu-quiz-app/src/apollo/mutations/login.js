import gql from 'graphql-tag'

const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			default {
				success
				message
				data
			}
			jwt
			me {
				email
                first_name
                last_name
                avatar_url
                degree
                study_start
			}
		}
	}
`

export default LOGIN

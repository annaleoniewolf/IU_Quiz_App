import { setContext } from '@apollo/client/link/context'
import {ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
 
 //ApolloClient
const httpLink = createHttpLink({
    uri: 'https://iu-quiz-app-api.herokuapp.com/graphql'
})

const authLink = setContext((_, { headers }) => {

    return {
        headers: {
        ...headers,
        authorization: `Bearer ${localStorage.getItem("token")}` || ""
        }
}
})

const client = new ApolloClient({
link: authLink.concat(httpLink),
cache: new InMemoryCache()
});

export default client
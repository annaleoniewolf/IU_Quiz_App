import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from './context/ModalContext'
import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


import Navigation from './components/blocks/Navigation'
import Footer from './components/blocks/Footer';
import Pages from './pages/Pages';
import Modal from './components/modals/Modal'

const client = new ApolloClient({
  /*
  uri: 'https://api-wbplatform-staging.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
      watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
      },
      query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
      }
  }*/
})




function App() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState("")
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalContext.Provider value={{open, setOpen, type, setType}}>
          <BrowserRouter>
            <Modal type="NewGame" />
            <Navigation />
            <Pages />
            <Footer />
          </BrowserRouter>
        </ModalContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

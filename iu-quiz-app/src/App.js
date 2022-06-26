import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from './context/ModalContext'
import { useState } from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql } from "@apollo/client";



import Navigation from './components/blocks/Navigation'
import Footer from './components/blocks/Footer';
import Pages from './pages/Pages';
import Modal from './components/modals/Modal'



function App() {
  //Modal
  const [open, setOpen] = useState(false)
  const [type, setType] = useState("")

  const client = new ApolloClient({
    uri: 'https://iu-quiz-app-api.herokuapp.com/graphql',
    cache: new InMemoryCache()
  });
  return (

      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <ModalContext.Provider value={{open, setOpen, type, setType}}>
            <BrowserRouter>
              <Modal />
              <Navigation />
              <Pages />
              <Footer />
            </BrowserRouter>
          </ModalContext.Provider>
        </ApolloProvider>
      </ThemeProvider>
  );
}

export default App;

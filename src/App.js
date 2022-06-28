import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from './context/ModalContext'
import { AuthContext } from './context/authContext'
import { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './apolloClient'
import Navigation from './components/blocks/Navigation'
import Footer from './components/blocks/Footer';
import Pages from './pages/Pages';
import Modal from './components/modals/Modal'

function App() {
  //Modal
  const [open, setOpen] = useState(false)
  const [type, setType] = useState("")
  //Auth Token
  const [token, setToken] = useState(false)
  const authToken = localStorage.getItem("token")

  return (

      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{token, setToken}}>
          <ApolloProvider client={client}>
            <GlobalStyle />
            <ModalContext.Provider value={{open, setOpen, type, setType}}>
              <BrowserRouter>
                <Modal />
                  {(token !== false || authToken !== null) && <Navigation />}
                <Pages />
                <Footer />
              </BrowserRouter>
            </ModalContext.Provider>
          </ApolloProvider>
        </AuthContext.Provider>
      </ThemeProvider>
  );
}

export default App;

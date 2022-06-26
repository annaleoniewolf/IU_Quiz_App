import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from './context/ModalContext'
import { useState } from 'react';



import Navigation from './components/blocks/Navigation'
import Footer from './components/blocks/Footer';
import Pages from './pages/Pages';
import Modal from './components/modals/Modal'



function App() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState("")
  return (

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalContext.Provider value={{open, setOpen, type, setType}}>
          <BrowserRouter>
            <Modal />
            <Navigation />
            <Pages />
            <Footer />
          </BrowserRouter>
        </ModalContext.Provider>
      </ThemeProvider>
  );
}

export default App;

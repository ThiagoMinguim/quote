import { ThemeProvider } from 'styled-components'
import Home from '@/pages/Home'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Author from './pages/Author'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Home /> */}
      <Author />
      <Footer />
    </ThemeProvider>
  )
}

export default App

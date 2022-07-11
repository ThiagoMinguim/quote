import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from '@/pages/Home'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Author from './pages/Author'
import Footer from './components/Footer'
import { QuoteProvider } from './hooks/quote-provider'

function App() {
  return (
    <QuoteProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="author" element={<Author />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </QuoteProvider>
  )
}

export default App

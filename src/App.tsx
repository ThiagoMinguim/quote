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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <QuoteProvider>
          <Routes>
            <Route index element={<Home quote={} />} />
            <Route path="author" element={<Author />} />
          </Routes>
        </QuoteProvider>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  )
}

export default App

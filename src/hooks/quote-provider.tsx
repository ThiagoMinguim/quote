import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '@/services'

export interface QuoteProviderProps {
  children: ReactNode
}

export interface Quote {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
}

interface QuoteContextData {
  authorQuotes: Quote[]
  quote: Quote | null
  getRandomQuote: () => Promise<void>
  setQuote: (quote: Quote) => void
  getAuthorQuotes: (author: string) => Promise<void>
}

export const QuoteContext = createContext({} as QuoteContextData)

const QuoteProvider = ({ children }: QuoteProviderProps) => {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [authorQuotes, setAuthorQuotes] = useState<Quote[]>([])

  const getRandomQuote = useCallback(async () => {
    setQuote(null)

    const { data } = await api.get<{ data: Quote[] }>('/random')

    setQuote(data.data[0])
  }, [])

  const handleSetQuote = useCallback((quote: Quote) => {
    setQuote(quote)
  }, [])

  const getAuthorQuotes = useCallback(async (author: string) => {
    setAuthorQuotes([])

    const { data } = await api.get<{ data: Quote[] }>('', {
      params: {
        author,
        limit: 3
      }
    })
    setAuthorQuotes(data.data)
  }, [])

  // useEffect(() => {
  //   api.get('/random').then(({ data }) => setQuote(data.data[0]))
  // }, [])

  return (
    <QuoteContext.Provider
      value={{
        quote,
        authorQuotes,
        getRandomQuote,
        setQuote: handleSetQuote,
        getAuthorQuotes
      }}>
      {children}
    </QuoteContext.Provider>
  )
}

const useQuote = () => useContext(QuoteContext)

export { useQuote, QuoteProvider }

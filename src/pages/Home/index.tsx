import RandomBox from '@/components/RandomBox'
import Header from '@/components/Header'
import Phrase from '@/components/Phrase'
import { Wrapper, Content } from './styles'
import { QuoteContext, Quote, useQuote } from '@/hooks/quote-provider'
import { useContext, useEffect } from 'react'

// useEffect(() => {}, [])

const Home = () => {
  const { quote, getRandomQuote } = useContext(QuoteContext)

  const quoteText = quote ? quote.quoteText : ''

  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Phrase quote={quote} />
          <RandomBox />
        </Content>
      </Wrapper>
    </>
  )
}

export default Home

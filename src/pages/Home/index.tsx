import Header from '@/components/Header'
import Loading from '@/components/Loading'
import Phrase from '@/components/Phrase'
import RandomBox from '@/components/RandomBox'
import { QuoteContext } from '@/hooks/quote-provider'
import { useContext, useEffect } from 'react'
import { Content, Wrapper } from './styles'

const Home = () => {
  const { quote, getRandomQuote, loading } = useContext(QuoteContext)

  const quoteText = quote ? quote.quoteText : ''

  useEffect(() => {
    getRandomQuote()
  }, [])

  if (loading) {
    return <Loading />
  }

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

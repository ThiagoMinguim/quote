import RandomBox from '@/components/RandomBox'
import Header from '@/components/Header'
import Phrase from '@/components/Phrase'
import { Wrapper, Content } from './styles'
import { SingleQuote, useQuote } from '@/hooks/quote-provider'
import { useEffect } from 'react'

type HomeProps = {
  quote: SingleQuote
}

const Home = ({ quote }: HomeProps) => {
  const { setQuote } = useQuote()

  useEffect(() => {
    setQuote(quote)
  }, [quote, setQuote])

  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Phrase text={quote.quoteAuthor} />
          <RandomBox />
        </Content>
      </Wrapper>
    </>
  )
}

export default Home

import RandomBox from '@/components/RandomBox'
import Header from '@/components/Header'
import Phrase from '@/components/Phrase'
import { Wrapper, Content } from './styles'
import { QuoteContext, SingleQuote, useQuote } from '@/hooks/quote-provider'
import { useContext, useEffect } from 'react'

// useEffect(() => {}, [])

const Home = () => {
  const { getRandomQuote } = useContext(QuoteContext)
  // const data = useContext(QuoteContext)
  // console.log(data)
  // const { setQuote } = useQuote()

  // useEffect(() => {
  //   getRandomQuote
  // }, [])

  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Phrase />
          <RandomBox />
        </Content>
      </Wrapper>
    </>
  )
}

export default Home

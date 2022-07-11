import Header from '@/components/Header'
import Phrase from '@/components/Phrase'
import { QuoteContext } from '@/hooks/quote-provider'
import { useContext } from 'react'
import { Wrapper, NameAuthor } from './styles'

const Author = () => {
  const { quote } = useContext(QuoteContext)

  return (
    <>
      <Wrapper>
        <Header />

        <NameAuthor>{quote?.quoteAuthor}</NameAuthor>

        <Phrase />
        <Phrase />
        <Phrase />
      </Wrapper>
    </>
  )
}

export default Author

import { QuoteContext, SingleQuote, useQuote } from '@/hooks/quote-provider'
import { useContext, useEffect } from 'react'
import { Container, Content } from './styles'

interface PhraseProps {
  text: string
}

const Phrase = ({ text }: PhraseProps) => {
  const { quote, getRandomQuote } = useContext(QuoteContext)

  const quoteText = quote ? quote.quoteText : text

  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <Container>
      <Content>
        <span>{quoteText}</span>
      </Content>
    </Container>
  )
}

export default Phrase

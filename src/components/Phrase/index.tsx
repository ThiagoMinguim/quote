import { QuoteContext, Quote, useQuote } from '@/hooks/quote-provider'
import { useContext, useEffect } from 'react'
import { Container, Content } from './styles'

interface PhraseProps {
  quote?: Quote | null
}

const Phrase = ({ quote }: PhraseProps) => {
  return (
    <Container>
      <Content>
        <span>{quote?.quoteText}</span>
      </Content>
    </Container>
  )
}

export default Phrase

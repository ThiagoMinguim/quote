import { SingleQuote, useQuote } from '@/hooks/quote-provider'
import { useEffect } from 'react'
import { Container, Content } from './styles'

interface PhraseProps {
  text: string
}

const Phrase = ({ text }: PhraseProps) => {
  return (
    <Container>
      <Content>
        <span>{text}</span>
      </Content>
    </Container>
  )
}

export default Phrase

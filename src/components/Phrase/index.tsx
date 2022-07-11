import { Quote } from '@/hooks/quote-provider'
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

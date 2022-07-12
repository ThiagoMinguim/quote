import { QuoteContext } from '@/hooks/quote-provider'
import { useContext } from 'react'
import { MdOutlineAutorenew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

const Header = () => {
  const { getRandomQuote, quote } = useContext(QuoteContext)
  const navigate = useNavigate()

  async function handleFetchQuote() {
    await getRandomQuote()
    navigate('/')
  }

  return (
    <Container onClick={handleFetchQuote}>
      <span>random</span>
      <MdOutlineAutorenew />
    </Container>
  )
}

export default Header

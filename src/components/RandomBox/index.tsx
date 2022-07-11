import { Container, AuthorInfo } from './styles'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { QuoteContext } from '@/hooks/quote-provider'

const RandomBox = () => {
  const { quote } = useContext(QuoteContext)

  const navigate = useNavigate()

  function handleClick() {
    const search = new URLSearchParams({
      name: quote?.quoteAuthor || ''
    }).toString()

    navigate({ pathname: '/author', search })
  }

  const quoteAuthor = quote ? quote.quoteAuthor : 'Author'
  const quoteGenre = quote ? quote.quoteGenre : 'Genre'

  return (
    <Container>
      <AuthorInfo>
        <span>{quoteAuthor}</span>

        <p>{quoteGenre}</p>
      </AuthorInfo>

      <button onClick={handleClick}>
        <MdOutlineArrowRightAlt />
      </button>
    </Container>
  )
}

export default RandomBox

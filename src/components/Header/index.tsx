import { Container } from './styles'
import { MdOutlineAutorenew } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { useQuote } from '@/hooks/quote-provider'

const Header = () => {
  const { getRandomQuote, quote } = useQuote()
  const location = useLocation()
  const navigate = useNavigate()

  const handleFetchQuote = useCallback(async () => {
    await getRandomQuote()

    if (location.pathname !== '/') {
      navigate('/')
    }

    console.log(quote)
  }, [getRandomQuote, location])

  return (
    <Container>
      <button onClick={handleFetchQuote}>
        <span>random</span>
        <MdOutlineAutorenew />
      </button>
    </Container>
  )
}

export default Header

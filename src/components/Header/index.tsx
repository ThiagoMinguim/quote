import { Container } from './styles'
import { MdOutlineAutorenew } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useContext, useEffect, useState } from 'react'
import { QuoteContext, useQuote } from '@/hooks/quote-provider'

const Header = () => {
  // const { setQuote } = useContext(QuoteContext)
  const { getRandomQuote, quote } = useContext(QuoteContext)
  const location = useLocation()
  const navigate = useNavigate()

  async function handleFetchQuote() {
    await getRandomQuote()
    console.log(quote)
    navigate('/')
  }
  // const handleFetchQuote = useCallback(async () => {
  //   await getRandomQuote()

  //   if (location.pathname !== '/') {
  //     navigate('/')
  //   }

  //   console.log(quote)
  // }, [getRandomQuote, location])

  return (
    <Container onClick={handleFetchQuote}>
      <span>random</span>
      <MdOutlineAutorenew />
    </Container>
  )
}

export default Header

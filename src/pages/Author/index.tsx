import Header from '@/components/Header'
import Phrase from '@/components/Phrase'
import { QuoteContext } from '@/hooks/quote-provider'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Wrapper, NameAuthor } from './styles'

const Author = () => {
  const { authorQuotes, getAuthorQuotes } = useContext(QuoteContext)
  const location = useLocation()

  useEffect(() => {
    const authorName = new URLSearchParams(location.search).get('name')
    getAuthorQuotes(authorName!)
  }, [])
  return (
    <>
      <Wrapper>
        <Header />

        <NameAuthor>{authorQuotes[0]?.quoteAuthor}</NameAuthor>

        {authorQuotes?.map(quote => (
          <Phrase key={quote._id} quote={quote} />
        ))}
      </Wrapper>
    </>
  )
}

export default Author

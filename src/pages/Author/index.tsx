import Header from '@/components/Header'
import Loading from '@/components/Loading'
import Phrase from '@/components/Phrase'
import { QuoteContext } from '@/hooks/quote-provider'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Wrapper, NameAuthor } from './styles'

const Author = () => {
  const { authorQuotes, getAuthorQuotes, loading } = useContext(QuoteContext)
  const location = useLocation()

  useEffect(() => {
    const authorName = new URLSearchParams(location.search).get('name')
    getAuthorQuotes(authorName!)
  }, [])

  if (loading) {
    return <Loading />
  }

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

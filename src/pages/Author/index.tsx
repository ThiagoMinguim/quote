import Header from '@/components/Header'
import Phrase from '@/components/Phrase'
import { Wrapper, NameAuthor } from './styles'

const Author = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <NameAuthor>Bill Gates</NameAuthor>
        <Phrase />
        <Phrase />
        <Phrase />
      </Wrapper>
    </>
  )
}

export default Author

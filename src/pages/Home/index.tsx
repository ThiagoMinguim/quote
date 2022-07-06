import Author from '@/components/Author'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Phrase from '@/components/Phrase'
import { Wrapper, Content } from './styles'

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Phrase />
          <Author />
        </Content>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Home

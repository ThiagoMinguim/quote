import RandomBox from '@/components/RandomBox'
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
          <RandomBox />
        </Content>
      </Wrapper>
    </>
  )
}

export default Home

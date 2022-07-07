import { Container, AuthorInfo } from './styles'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const RandomBox = () => {
  return (
    <Container>
      <AuthorInfo>
        <span>Bill Gates</span>

        <p>business</p>
      </AuthorInfo>
      <MdOutlineArrowRightAlt />
    </Container>
  )
}

export default RandomBox

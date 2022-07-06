import { Container, AuthorInfo } from './styles'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Author = () => {
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

export default Author

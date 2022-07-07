import { Container, AuthorInfo } from './styles'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const RandomBox = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/author')
  }

  return (
    <Container>
      <AuthorInfo>
        <span>Bill Gates</span>

        <p>business</p>
      </AuthorInfo>

      <button onClick={handleClick}>
        <MdOutlineArrowRightAlt />
      </button>
    </Container>
  )
}

export default RandomBox

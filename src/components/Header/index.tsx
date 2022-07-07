import { Container } from './styles'
import { MdOutlineAutorenew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <Container>
      <button onClick={handleClick}>
        <span>random</span>
        <MdOutlineAutorenew />
      </button>
    </Container>
  )
}

export default Header

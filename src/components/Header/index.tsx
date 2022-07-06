import { Container } from './styles'
import { MdOutlineAutorenew } from 'react-icons/md'
import { useTheme } from 'styled-components'

const Header = () => {
  const theme = useTheme()

  return (
    <Container>
      <span>random</span>
      <MdOutlineAutorenew />
    </Container>
  )
}

export default Header

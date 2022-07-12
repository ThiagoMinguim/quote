import Lottie from 'react-lottie'
import load_app from '@/public/load_app.json'
import { Container } from './styles'

const Loading = () => {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: load_app,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={150}
        width={150}
      />
    </Container>
  )
}

export default Loading

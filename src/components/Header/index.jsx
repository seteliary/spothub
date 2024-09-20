import { Background, Container, Logo } from "./styles"
import logo from '../../assets/logo.png'

export default function Header(){
  return (
    <Background>
      <Container>
        <Logo src={logo} alt="Logo"/>
        <i class="far fa-user-circle"></i>
      </Container>
    </Background>
  )
}
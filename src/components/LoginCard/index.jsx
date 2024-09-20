import { Container, LogoContainer, InputsContainer } from "./styles";
import Input from "./Input";
import Button from "./LoginButton";
import logo from "../../assets/logo.png";
import Home from "../../pages/Home";

export default function LoginCard() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Logo" class="logo" />
      </LogoContainer>
      <InputsContainer>
        <Input
          label="E-mail"
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <div class="senha-container">
          <Input
            label="Senha"
            id="senha"
            type="password"
            placeholder="Digite sua senha"
          />
          <a href={Home}>Esqueci minha senha</a>
        </div>
        <Button />
      </InputsContainer>
    </Container>
  );
}

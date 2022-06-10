import "../styles.css";
import LoginImage from "../Images/login-bg.jpg";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${LoginImage}) right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 2em;
  width: 35%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const Form = styled.form``;

const InputContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 0.5em; */
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 1em 0px;
  padding: 1em 2em;
  font-size: 1rem;
  box-sizing: border-box;

  width: 100%;
`;

const Link = styled.a`
  font-size: 0.8rem;
  margin: 1rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;

  &:hover {
    color: darkblue;
  }
`;

const LinkContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: 1em 0em;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.03rem;

  &:hover {
    filter: brightness(130%);
  }
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <InputContainer>
            <Input placeholder="Username" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Password" />
          </InputContainer>
          <InputContainer>
            <Button>LOG IN</Button>
          </InputContainer>
          <LinkContainer>
            <Link href="#0">Forgot password?</Link>
            <Link href="#0">Create new account</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
}

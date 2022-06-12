import "../styles.css";
import RegisterPageBgImage from "../Images/register-page-bg.jpg";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${RegisterPageBgImage}) center;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    background: "none"
  })}
`;

const Wrapper = styled.div`
  padding: 2em;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Title = styled.h3`
  font-size: 2rem;

  ${mobile({
    fontSize: "1.5rem"
  })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 2em 0px 0px;
  padding: 1em 2em;
  font-size: 1rem;
  display: block;

  ${mobile({
    border: "1px solid gray"
  })}
`;

const Agreement = styled.p`
  font-size: 0.7rem;
  margin: 1rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    display: "none"
  })};
`;

const MobileAgreement = styled.p`
  display: "none",
    ${mobile({
      display: "block",
      width: "100%",
      backgroundColor: "orange"
    })};
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    filter: brightness(130%);
  }
`;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>WELCOME TO LAMA.</Title>
        <Form>
          <InputContainer>
            <Input placeholder="First Name" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Last Name" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Username" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Password" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Confirm Password" />
          </InputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <b className="privacy">PRIVACY POLICY</b>
          </Agreement>
          <MobileAgreement>Read Agreement Policy</MobileAgreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

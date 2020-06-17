import React from 'react';
import styled from 'styled-components';

const Welcome: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:anna@annajcarey.com';
  };
  return (
    <Wrapper>
      <TopDiv> </TopDiv>
      <Header>
        <H1>Stacked Co.</H1>
        <H2>Technical growth marketers deployed</H2>
        <Button onClick={handleClick}>Contact Us</Button>
      </Header>
      <LogoContainer>
        <P>Members of the collective have worked with:</P>
        <Logos>
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </Logos>
      </LogoContainer>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c7975;
`;

const TopDiv = styled.div`
  height: 20%;
`;

const Header = styled.div`
  width: 100%;
  height: 60%;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0px;
`;

const H1 = styled.h1`
  margin: 0px;
  font-size: 60px;
`;

const H2 = styled.p`
  margin: 0px;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

const P = styled.p`
  margin: 0px;
  font-size: 12px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: #1c7975;
  width: 150px;
  height: 30px;
  align-self: center;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  flex-grow: 1;
  color: white;
`;

const Logos = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Logo = styled.div`
  width: 20px;
  height: 20px;
  background-color: #808080;
`;

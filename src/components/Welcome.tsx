import React from 'react';
import styled from 'styled-components';

const Welcome: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Stacked Co.</h1>
        <P>Technical growth marketers deployed</P>
        <Button>Contact Us</Button>
      </Header>
      <LogoContainer> 
          <P>Members of the collective have worked with:</P>
          <Logos>
              <Logo/>
              <Logo/>
              <Logo/>
              <Logo/>
              <Logo/>
              <Logo/>
          </Logos>
      </LogoContainer>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c7975;
`;

const Header = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
`;

const P = styled.p`
  margin: 0px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: #1c7975;
  width: 150px;
  height: 30px;
  align-self: center;
  margin-top: 20px;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  color: white;
`;

const Logos = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const Logo = styled.div`
  width: 20px;
  height: 20px;
  background-color: #808080;
`;

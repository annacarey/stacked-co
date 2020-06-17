import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <LeftLinks>
        <LogoContainer>
          <Logo />
          <Text>Terms | Privacy | Cookies</Text>
        </LogoContainer>
      </LeftLinks>
      <RightLinks>
        <A href="mailto:anna@annjcarey.com">hello@stacked.co</A>
      </RightLinks>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  min-height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color #1c7975; 
  flex-grow: 1;
`;

const RightLinks = styled.div`
  width: 100%;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  color: white;
  font-size: 10px;
`;

const LeftLinks = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
`;

const Text = styled.p`
  margin: 0px;
  color: white;
  font-size: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 20px;
  height: 20px;
  background-color: #808080;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;

import React from 'react';
import styled from 'styled-components';
import logo from '../images/stacked.png';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <LeftLinks>
        <LogoContainer>
          <Logo src={logo} />
          <Text>Terms | Privacy | Cookies</Text>
        </LogoContainer>
      </LeftLinks>
      <RightLinks>
        <A href="mailto:anna@annjcarey.com">
          <strong>hello@stacked.co</strong>
        </A>
      </RightLinks>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color #20545e; 
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
  @media (max-width: 420px) {
    padding-left: 10%;
  }
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
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  font-size: 12px;
`;

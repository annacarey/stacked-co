import React from 'react';
import styled from 'styled-components';

const Services: React.FC = () => {
  return (
    <Wrapper>
      <Headline>What We Love</Headline>
      <IconWrapper>
        <Icon>
          <Logo />
          <Text>Systems</Text>
          <Text>Architecture</Text>
        </Icon>
        <Icon>
          <Logo />
          <Text>Retention</Text>
          <Text>& CRM</Text>
        </Icon>
        <Icon>
          <Logo />
          <Text>UX</Text>
          <Text>& CRO</Text>
        </Icon>
        <Icon>
          <Logo />
          <Text>Growth</Text>
          <Text>Training</Text>
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  min-height: 30vw;
  display: flex;
  flex-direction: column;
  background-color: #1c7975;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 14px;
  color: white;
  margin: 0px;
  text-align: center;
`;

const Logo = styled.div`
  background-color: grey;
  width: 50px;
  height: 50px;
`;

const Headline = styled.h1`
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

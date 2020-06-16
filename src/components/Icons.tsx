import React from 'react';
import styled from 'styled-components';

const Services: React.FC = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Logo />
        <Text>Systems</Text>
        <Text>Architecture</Text>
      </IconWrapper>
      <IconWrapper>
        <Logo />
        <Text>Retention</Text>
        <Text>& CRM</Text>
      </IconWrapper>
      <IconWrapper>
        <Logo />
        <Text>UX</Text>
        <Text>& CRO</Text>
      </IconWrapper>
      <IconWrapper>
        <Logo />
        <Text>Growth</Text>
        <Text>Training</Text>
      </IconWrapper>
      <IconWrapper />
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1c7975;
`;

const IconWrapper = styled.div`
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

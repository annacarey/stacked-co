import React from 'react';
import styled from 'styled-components';
import chart from '../images/chart.png';
import chat from '../images/chat.png';
import gear from '../images/gear.png';
import list from '../images/list.png';

const Services: React.FC = () => {
  return (
    <Wrapper>
      <Headline>What We Love</Headline>
      <IconWrapper>
        <Icon>
          <Logo src={gear} />
          <strong>
            <Text>Systems</Text>
            <Text>Architecture</Text>
          </strong>
        </Icon>
        <Icon>
          <Logo src={chat} />
          <strong>
            <Text>Retention</Text>
            <Text>& CRM</Text>
          </strong>
        </Icon>
        <Icon>
          <Logo src={list} />
          <strong>
            <Text>UX</Text>
            <Text>& CRO</Text>
          </strong>
        </Icon>
        <Icon>
          <Logo src={chart} />
          <strong>
            <Text>Growth</Text>
            <Text>Training</Text>
          </strong>
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #20545e;
  @media (max-width: 420px) {
    height: 25%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
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
  @media (max-width: 420px) {
    font-size: 10px;
    margin-top: 2px;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 80px;
  padding-bottom: 20px;
  @media (max-width: 420px) {
    height: 60px;
  }
`;

const Headline = styled.h1`
  font-size: 30px;
  color: white;
  margin-top: 40px;
  margin-bottom: 0px;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 25px;
  }
`;

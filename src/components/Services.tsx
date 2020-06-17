import React from 'react';
import styled from 'styled-components';

const Services: React.FC = () => {
  return (
    <Wrapper>
      <Headline>Our Services</Headline>
      <CardWrapper>
        <Card>
          <Text>Engagement &</Text>
          <Text>Retention Audit</Text>
        </Card>
        <Card>
          <Text>Launch</Text>
          <Text>Maximization</Text>
          <Text>Team</Text>
        </Card>
        <Card>
          <Text>Marketing</Text>
          <Text>Automation</Text>
          <Text>Launchpad</Text>
        </Card>
        <Card>
          <Text>Growth Strategy</Text>
          <Text>Consulting</Text>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 130px;
  height: 200px;
  background-color: #20545e;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Headline = styled.h1`
  font-size: 20px;
  color: #20545e;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  color: 20545e;
`;

const Text = styled.h1`
  font-size: 14px;
  color: white;
  margin: 0px;
  text-align: center;
`;

import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Services: React.FC = () => {
  return (
    <Wrapper>
      <Headline>Our Services</Headline>
      <CardWrapper>
        <Card
          paragraph="some other words"
          title="Engagement & Retention Audit"
        />
        <Card paragraph="some other words" title="Launch Maximization Team" />
        <Card
          paragraph="some other words"
          title="Marketing Automation Launchpad"
        />
        <Card paragraph="some other words" title="Growth Strategy Consulting" />
      </CardWrapper>
      <BottomWrapper>
        <LeftWrapper>
          <H>Systematically increase ROAS and LTV</H>
          <P>
            We design and implement retention and conversion strategies that
            enable efficient marketing teams to generate and nurture millions of
            perosnal customer relationships.
          </P>
          <Button>Contact Us</Button>
        </LeftWrapper>
        <RightWrapper>
          <ImagePlaceholder />
        </RightWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 40px;
`;

const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomWrapper = styled.div`
  margin-top: 3%;
  display: flex;
`;

const Headline = styled.h1`
  font-size: 20px;
  color: #20545e;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  color: 20545e;
`;

const H = styled.h1`
  font-size: 16px;
  color: #20545e;
`;

const P = styled.p`
  font-size: 12px;
  color: #20545e;
  margin-bottom: 0px;
`;

const ImagePlaceholder = styled.div`
  width: 200px;
  height: 100px;
  background-color: grey;
`;

const Button = styled.button`
  background-color: #20545e;
  border: none;
  color: white;
  width: 150px;
  height: 30px;
  align-self: center;
  margin-top: 20px;
`;

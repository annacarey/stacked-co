import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import growth from '../images/growth.png';
import engagement from '../images/engagement.png';
import launchpad from '../images/launchpad.png';
import launch from '../images/launch.png';

const Services: React.FC = () => {
  return (
    <Wrapper id="services">
      <Headline>Our Services</Headline>
      <MainWrapper>
        <CardWrapper>
          <LeftCol>
            <Card
              paragraph="We identify gaps in your retention and CRO capabilities and roadmap to generate value immediately & systematically increase revenue into the future."
              frontTitle="Engagement & Retention Audit"
              backTitle="An expert playbook built just for you"
              image={engagement}
            />
            <Card
              paragraph="We rapidly implement CRO and retention tactics that maximize and amplify the value of earned traffic during a launch or significant PR event."
              frontTitle="Launch Maximization Team"
              backTitle="Get the most out of your launch"
              image={launch}
            />
          </LeftCol>
          <RightCol>
            <Card
              paragraph="We build and prove all the systems for you and train your team on how to continually optimize them long after we’re gone."
              backTitle="We strategize, implement & execute"
              frontTitle="Marketing Automation Launchpad"
              image={launchpad}
            />
            <Card
              paragraph="We’re there to work through growth strategy, vet key hires, and knockdown barriers when you need results fast. A trusted resource for your leadership team."
              backTitle="A senior growth partner in your corner"
              frontTitle="Growth Strategy Consulting"
              image={growth}
            />
          </RightCol>
        </CardWrapper>
      </MainWrapper>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  min-height: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    height: 100%;
    min-height: 375px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
  flex-basis: auto;
  margin-right: 20px;
  margin-bottom: 12%;
  @media (max-width: 620px) {
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
    margin-bottom: 50px;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  @media (max-width: 620px) {
    width: calc(100% - 60px);
    margin-left: 20px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  @media (max-width: 620px) {
    width: calc(100% - 60px);
    margin-left: 20px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`;

const Headline = styled.h1`
  font-size: 30px;
  color: #20545e;
  margin-bottom: 30px;
  margin-top: 0px;
  text-align: center;
  color: 20545e;
  @media (max-width: 420px) {
    font-size: 25px;
  }
`;

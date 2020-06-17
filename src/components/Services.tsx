import React from 'react';
import styled from 'styled-components';
import office from '../images/office.jpeg'
import Card from './Card';

const Services: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:anna@annajcarey.com';
  };

  return (
    <Wrapper id="services">
      <Headline>Our Services</Headline>
      <MainWrapper>
        <CardWrapper>
          <LeftCol>
            <Card
              paragraph="We identify gaps in your retention and CRO capabilities and build a roadmap to generate value immediately & systematically increase revenue into the future."
              frontTitle="Engagement & Retention Audit"
              backTitle="An expert playbook built just for you"
            />
            <Card
              paragraph="We rapidly implement CRO and retention tactics that maximize and amplify the value of earned traffic during a launch or significant PR event."
              frontTitle="Launch Maximization Team"
              backTitle="Get the most out of your launch"
            />
          </LeftCol>
          <RightCol>
            <Card
              paragraph="We build and prove all the systems for you and train your team on how to continually optimize them long after we’re gone."
              backTitle="We strategize, implement & execute"
              frontTitle="Marketing Automation Launchpad"
            />
            <Card
              paragraph="We’re there to work through growth strategy, vet key hires, and knockdown barriers when you need results fast. A trusted resource for your leadership team."
              backTitle="A senior growth partner in your corner"
              frontTitle="Growth Strategy Consulting"
            />
          </RightCol>
        </CardWrapper>
        <BottomWrapper>
          <BottomContent>
            <LeftWrapper>
              <H>Systematically increase ROAS and LTV</H>
              <P>
                We design and implement retention and conversion strategies that
                enable efficient marketing teams to generate and nurture
                millions of perosnal customer relationships.
              </P>
              <Button onClick={handleClick}>Contact Us</Button>
            </LeftWrapper>
            <RightWrapper>
              <Image src={office} />
            </RightWrapper>
          </BottomContent>
        </BottomWrapper>
      </MainWrapper>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  min-height: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    height: 100%;
    min-height: 575px;
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
  @media (max-width: 620px) {
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BottomContent = styled.div`
  width: 100%;
  margin-left: 35px;
  display: flex;
  @media (max-width: 620px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 0px;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
  }
  @media (min-width: 900px) {
    width: 860px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 620px) {
    width: 410px;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    width: 210px;
  }
`;

const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomWrapper = styled.div`
  margin-top: 7%;
  display: flex;
  margin-bottom: 7%;
`;

const Headline = styled.h1`
  font-size: 30px;
  color: #20545e;
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;
  color: 20545e;
  @media (max-width: 420px) {
    font-size: 25px;
  }
`;

const H = styled.h1`
  font-size: 20px;
  color: #20545e;
`;

const P = styled.p`
  font-size: 14px;
  color: #20545e;
  margin-bottom: 0px;
  @media (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const Image = styled.img`
  width: 70%;
  height: auto;
  background-color: grey;
  margin-top: 3%;
  @media (max-width: 620px) {
    margin-top: 20px;
    margin-bottom: 30px;
    width: 100%;
  }
  @media (max-width: 420px) {
    margin-bottom: 30px;
    width: 140%;
  }
`;

const Button = styled.button`
  align-self: flex-start;
  background-color: #20545e;
  border: none;
  color: white;
  width: 180px;
  height: 40px;
  cursor: pointer;
  outline: none;
  margin-bottom: 3%;
  margin-top: 10%;
  @media (max-width: 620px) {
    margin-bottom: 30px;
  }
  @media (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

import React from 'react';
import styled from 'styled-components';
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
              <ImagePlaceholder />
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
  }
  // @media (max-width: 560px) {
  //   align-items: 
  // }
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex: 1 1 100%;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex: 1 1 100%;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BottomContent = styled.div`
  width: 560px;
  display: flex;
  @media (max-width: 620px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
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
  margin-bottom: 5%;
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
  @media (max-width: 620px) {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  background-color: #20545e;
  border: none;
  color: white;
  width: 150px;
  height: 30px;
  align-self: center;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`;

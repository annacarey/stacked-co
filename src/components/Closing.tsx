import React from 'react';
import styled from 'styled-components';
import office from '../images/office.jpeg';

const Services: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:anna@annajcarey.com';
  };

  return (
    <Wrapper id="services">
      <BottomContent>
        <LeftWrapper>
          <H>Systematically increase ROAS and LTV</H>
          <P>
            We design and implement retention and conversion strategies that
            enable efficient marketing teams to generate and nurture millions of
            perosnal customer relationships.
          </P>
          <Button onClick={handleClick}>Let's Chat</Button>
        </LeftWrapper>
        <RightWrapper>
          <Image src={office} />
        </RightWrapper>
      </BottomContent>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  min-height: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    height: 100%;
    min-height: 400px;
  }
`;

const BottomContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 620px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 0px;
    margin-top: 12%;
    margin-bottom: 12%;
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
  padding-left: 50px;
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

const H = styled.h1`
  font-size: 20px;
  color: #20545e;
  margin-top: 0;
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
  margin-top: 3%;
  @media (max-width: 620px) {
    margin-top: 20px;
    width: 100%;
  }
  @media (max-width: 420px) {
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

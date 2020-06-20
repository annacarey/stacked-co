import React from 'react';
import styled from 'styled-components';

type CardFrontProps = {
  frontTitle: string;
};

const CardFront = ({ frontTitle }: CardFrontProps) => {
  return (
    <CardWrapper>
        <TitleContainer>
        <Title>{frontTitle} </Title>
        </TitleContainer>
      
      <ButtonContainer>
        <Button>Learn More</Button>
      </ButtonContainer>
    </CardWrapper>
  );
};

export default CardFront;

const CardWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: baseline;
    justify-content: baseline;
    flex-direction: column;
`;
const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

`
const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0px;
  padding: 20px;
  text-align: center;
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 820px) {
    font-size: 16px;
  }
  @media (max-width: 650px) {
    font-size: 13px;
  }
  @media (max-width: 620px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 0px;
  align-self: flex-end;
`;

const Button = styled.button`
  display: none;
  font-size: 10px;
  background: none;
  border: none;
  padding: 15px;
  padding-bottom: 25px;
  align-self: flex-end;
  text-align: right;
  text-decoration: underline;
  color: white;
  height: 10px;
  @media (max-width: 420px) {
    display: block;
  }
`;

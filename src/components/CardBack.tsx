import React from 'react';
import styled from 'styled-components';

type CardBackProps = {
  backTitle: string;
  paragraph: string;
};

const CardBack = ({ backTitle, paragraph }: CardBackProps) => {
  return (
    <CardWrapper>
      <Title>{backTitle} </Title>
      <P>{paragraph} </P>
    </CardWrapper>
  );
};

export default CardBack;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  background-color: #20545e;
  @media (max-width: 850px) {
    padding: 18px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0px;
  padding-bottom: 20px;
  @media (max-width: 1020px) {
    font-size: 20px;
  }
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 750px) {
    font-size: 15px;
  }
  @media (max-width: 620px) {
    padding-bottom: 10px;
  }
`;

const P = styled.p`
  font-size: 17px;
  color: white;
  margin: 0px;
  @media (max-width: 1020px) {
    font-size: 15px;
  }
  @media (max-width: 850px) {
    font-size: 13px;
  }
  @media (max-width: 750px) {
    font-size: 11px;
  }
`;

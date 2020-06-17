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
`;

const Title = styled.h1`
  font-size: 14px;
  color: white;
  margin: 0px;
  padding: 15px;
  @media (max-width: 620px) {
    padding-bottom: 0px;
  }
`;

const P = styled.p`
  font-size: 12px;
  color: white;
  margin: 0px;
  padding: 15px;
  @media (max-width: 740px) {
    font-size: 11px;
  }
`;

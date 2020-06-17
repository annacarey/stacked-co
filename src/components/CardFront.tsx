import React, { useState } from 'react';
import styled from 'styled-components';

type CardFrontProps = {
  frontTitle: string;
};

const CardFront = ({ frontTitle }: CardFrontProps) => {
  return (
    <CardWrapper>
      <Title>{frontTitle} </Title>
    </CardWrapper>
  );
};

export default CardFront;

const CardWrapper = styled.div`

`;

const Title = styled.h1`
  font-size: 14px;
  color: white;
  margin: 0px;
  padding: 10px;
  text-align: center;
`;

const P = styled.p`
  font-size: 12px;
  color: white;
  margin: 0px;
`;

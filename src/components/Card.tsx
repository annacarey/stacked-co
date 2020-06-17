import React, { useState } from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  paragraph: string;
};

const Card = ({ title, paragraph }: CardProps) => {

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <CardWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {hover && <Title>{title} </Title>}
      {!hover && <P>{paragraph} </P>}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 130px;
  height: 200px;
  background-color: #20545e;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Title = styled.h1`
  font-size: 14px;
  color: white;
  margin: 0px;
  text-align: center;
`;

const P = styled.p`
  font-size: 12px;
  color: white;
  margin: 0px;
`;

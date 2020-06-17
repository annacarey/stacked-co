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
    <CardWrapper
      hover={hover}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {!hover && <Title>{title} </Title>}
      {hover && <P>{paragraph} </P>}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  max-width: 47.5%;
  min-width: 120px;
  transition: margin-top ease 0.5s;
  height: 250px;
  margin-top: ${(props) => (!props.hover ? '0px' : '-10px')};
  background-color: #20545e;
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-left: 5px;
  @media (max-width: 620px) {
    margin-bottom: 20px;
    margin-right: 10px;
    width: 200px;
    height: 120px;
  }
  @media (max-width: 420px) {
    min-width: 200px;
    min-height: 120px;
  }
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

import React, { useState } from 'react';
import styled from 'styled-components';
import CardFront from './CardFront';
import CardBack from './CardBack';

type CardProps = {
  frontTitle: string;
  backTitle: string;
  paragraph: string;
};

const Card = ({ frontTitle, backTitle, paragraph }: CardProps) => {
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
      {!hover && <CardFront frontTitle={frontTitle} />}
      {hover && <CardBack backTitle={backTitle} paragraph={paragraph} />}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  max-width: 205px;
  width: 40%;
  min-width: 120px;
  transition: margin-top ease 0.3s;
  height: 250px;
  margin-top: ${(props) => (!props.hover ? '0px' : '-10px')};
  background-color: #20545e;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-left: 5px;
  @media (max-width: 620px) {
    margin-bottom: 20px;
    margin-right: 20px;
    width: 220px;
    height: 160px;
    min-width: 210px;
    margin-left: 0px;
  }
  @media (max-width: 420px) {
    min-width: 250px;
    min-height: 160px;
    margin-right: 0px;
    margin-left: 0px;
    transition: none;
    margin-top: 0px;
  }
`;

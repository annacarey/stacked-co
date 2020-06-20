import React, { useState } from 'react';
import styled from 'styled-components';
import CardFront from './CardFront';
import CardBack from './CardBack';

type CardProps = {
  frontTitle: string;
  backTitle: string;
  paragraph: string;
  image: string;
};

const Card = ({ frontTitle, backTitle, paragraph, image }: CardProps) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <CardWrapper
      hover={hover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      image={image}
    >
      {!hover && <CardFront frontTitle={frontTitle} />}
      {hover && <CardBack backTitle={backTitle} paragraph={paragraph} />}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  max-width: 280px;
  width: calc(40% - 10px);
  min-width: 120px;
  transition: margin-top ease 0.3s;
  height: 370px;
  margin-top: ${(props) => (!props.hover ? '0px' : '-10px')};
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-left: 5px;
  @media (max-width: 850px) {
    height: 280px;
  }
  @media (max-width: 620px) {
    margin-bottom: 20px;
    margin-right: 20px;
    transition: none;
    width: 220px;
    height: 160px;
    margin-top: 0px;
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

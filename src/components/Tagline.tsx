import React from 'react';
import styled from 'styled-components';

const Tagline: React.FC = () => {
  return (
    <Wrapper>
      <Text>
        {' '}
        We help marketing and product teams create sustainable growth engines
        that mulitply revenue.
      </Text>
    </Wrapper>
  );
};

export default Tagline;

const Wrapper = styled.div`
  width: 100%;
  height: 20%;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 900px) {
    min-height: 45vh;
    height: 45vh;
  }
`;

const Text = styled.h1`
  font-size: 30px;
  color: #1c7975;
  margin: 15%;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 25px;
  }
`;

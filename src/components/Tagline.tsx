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
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 900px) {
    min-height: 35vh;
    height: 35vh;
  }
`;

const Text = styled.p`
  font-size: 30px;
  color: #20545e;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 12%;
  margin-bottom: 12%;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 25px;
  }
`;

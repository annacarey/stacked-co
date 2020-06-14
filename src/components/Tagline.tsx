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
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 20px;
  color: #1c7975;
  margin: 30px;
  text-align: center;
`;

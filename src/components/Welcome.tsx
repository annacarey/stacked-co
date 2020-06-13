import React from 'react';
import styled from 'styled-components';

const Welcome: React.FC = () => {
  return (
    <div>
      <Wrapper />
    </div>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1c7975;
`;

import React from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
// import Navbar from './Navbar';
import Tagline from './Tagline';
import Footer from './Footer';
import Icons from './Icons';
import Services from './Services';
import Closing from './Closing';

const Container: React.FC = () => {
  return (
    <Wrapper>
      <Body>
        <Welcome />
        <Tagline />
        <Services />
        <Icons />
        <Closing />
        <Footer />
      </Body>
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  height: 90%;
`;

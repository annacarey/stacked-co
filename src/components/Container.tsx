import React from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import Navbar from './Navbar';
import Tagline from './Tagline';
import Footer from './Footer';
import Icons from './Icons';
import Services from './Services';

const Container: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <Welcome />
      <Tagline />
      <Icons />
      <Services />
      <Footer />
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
`;

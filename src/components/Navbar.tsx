import React from 'react';
import styled from 'styled-components';

const Container: React.FC = () => {
  return (
    <Wrapper>
      <LeftLinks>
        <Logo> </Logo>
      </LeftLinks>
      <RightLinks>
        <A href="#services"> Services </A>
        <A href="mailto:anna@annajcarey.com"> Contact </A>
      </RightLinks>
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  display: flex;
`;

const RightLinks = styled.div`
  width: 100%;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10%;
`;

const LeftLinks = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 20px;
  height: 20px;
  background-color: #808080;
`;

const A = styled.a`
  cursor: pointer;
  padding-left: 20px;
  color: #20545e;
  text-decoration: none;
  font-size: 14px;
`;

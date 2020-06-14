import React from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

const Container: React.FC = () => {
  return (
    <Wrapper>
      <LeftLinks>
        <Logo> </Logo>
      </LeftLinks>
      <RightLinks>
        <Button type="button"> Services </Button>
        <Button type="button"> Contact </Button>
      </RightLinks>
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
`;

const RightLinks = styled.div`
  width: 100%;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;
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

const Button = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  padding-left: 20px;
`;

// const InternalLink = styled(NavLink)`
//   color: black;
//   padding: 0px;
//   text-decoration: none;
//   padding-right: 20px;
//   &:visited {
//     color: black;
//   }
//   &:hover {
//     color: #322c37;
//   }
// `;

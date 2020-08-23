import React from 'react';
import styled from 'styled-components';
import stacks from '../images/stacks.jpg';
import brave from '../images/brave.png';
import daybreaker from '../images/daybreaker.png';
import fresh from '../images/fresh.png';
import hellofresh from '../images/hellofresh.png';
import morningbrew from '../images/morningbrew.png';
import revel from '../images/revel.png';
import matchabar from '../images/matchabar.png';

const Welcome: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:dean@stackedco.co';
  };
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <TopDiv> </TopDiv>
      <Header>
        <HeadingContainer>
          <H1>Stacked Co. </H1>
          <H2>Technical growth marketers deployed</H2>
          <Button onClick={handleClick}>Contact Us</Button>
        </HeadingContainer>
      </Header>
      <LogoContainer>
        <P>Our leadership has worked with:</P>
        <Logos>
          <A marginRight={15}>
            <Logo height={35} src={matchabar} />
          </A>
          <A marginRight={15}>
            <Logo height={25} src={fresh} />
          </A>
          <A marginRight={20}>
            <Logo height={40} src={revel} />
          </A>
          <A>
            <Logo height={40} src={hellofresh} />
          </A>
          <A>
            <Logo height={30} src={daybreaker} />
          </A>
          <A>
            <Logo height={40} src={morningbrew} />
          </A>
          <A>
            <Logo height={30} src={brave} />
          </A>
        </Logos>
      </LogoContainer>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${stacks});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 900px) {
    padding-bottom: 40px;
  }
`;

const TopDiv = styled.div`
  height: calc(20% + 40px);
`;

const Header = styled.div`
  width: 100%;
  height: 60%;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0px;
  @media (max-width: 900px) {
    height: calc(60% - 10px);
  }
  @media (max-width: 365px) {
    height: calc(60% - 60px);
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const H1 = styled.h1`
  margin: 0px;
  font-size: 60px;
  margin-top: -7%;
  @media (max-width: 420px) {
    font-size: 50px;
  }
`;

const H2 = styled.p`
  margin: 0px;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

const P = styled.p`
  margin: 0px;
  font-size: 12px;
  @media (max-width: 450px) {
    align-self: center;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: #1c7975;
  width: 180px;
  height: 40px;
  align-self: center;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
  @media (max-width: 420px) {
    margin-top: 30px;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  color: white;
`;

const Logos = styled.div`
  margin-top: 2%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  -webkit-box-align: center;

  @media (max-width: 900px) {
    justify-content: center;
    -webkit-box-pack: center;
    width: initial;
    padding-bottom: 30px;
  }
`;

const Logo = styled.img`
  width: auto;
  height: ${(props) => props.height};
  max-height: 40px;
  @media (max-width: 900px) {
    align-self: center;
    margin-bottom: 10px;
  }
`;

const A = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  max-width: 100%;
  display: inline-block;
  @media (max-width: 900px) {
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    flex-basis: 20%;
    justify-content: center;
  }
  @media (max-width: 441px) {
    flex-basis: 0%;
    margin-bottom: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }
  @media (max-width: 365px) {
    flex-basis: 28%;
  }
  @media (max-width: 375px) {
    margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
  }
  @media (max-width: 335px) {
    flex-basis: 0%;
  }
`;

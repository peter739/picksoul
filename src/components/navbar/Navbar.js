import React from 'react'
import styled from 'styled-components';
import { useSpring, animated, config } from "react-spring";
import Brand from './Brand';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';


const Navbar = (props) => {

  return (
    <>
      <NavBar >
        <FlexContainer>
          <Brand logo_container/>

          <NavLinks>
            <a href="/">Home</a>
            <a href="/Process">My Process</a>
            <a href="/Casestudies">Case Studies</a>
            <a href="/Contact">Contact</a>
          </NavLinks>
  <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  padding-right: 2rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  height: 3rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    font-weight: normal;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 575.98px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 576px) {
    display: none;
  }
`;

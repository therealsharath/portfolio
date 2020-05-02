import React from 'react'
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Link } from "react-scroll";

import Brand from "./Brand.jsx";
import BurgerMenu from "./BurgerMenu.jsx";
import CollapseMenu from "./CollapseMenu.jsx";

const NavbarHelper = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBarHelper style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <Link to="home" spy={true} smooth={true} duration={500}><a>Home</a></Link>
            <Link to="about" spy={true} smooth={true} duration={500}><a>About</a></Link>
            <Link to="portfolio" spy={true} smooth={true} duration={500}><a>Portfolio</a></Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBarHelper>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default NavbarHelper

const NavBarHelper = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;

  @media (max-width: 768px) {
    background: rgb(0, 0, 0, 0.9);
  }

`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #e8bc53;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
 
const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
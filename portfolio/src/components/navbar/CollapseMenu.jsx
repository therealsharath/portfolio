import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li>
            <Link to="home" spy={true} smooth={true} duration={500} onClick={props.handleNavbar}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500} onClick={props.handleNavbar}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true} duration={500} onClick={props.handleNavbar}>
              <span>Portfolio</span>
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: rgb(0, 0, 0, 0.8);
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
  height: 100vh;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  
  & li {
    transition: all 500ms linear 0s;
  }

  & span {
    font-size: 2.5vh;
    line-height: 5vh;
    color: #dfe6e9;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
    }
  }
`;


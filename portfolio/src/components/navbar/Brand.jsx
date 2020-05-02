import React from 'react'
import styled from "styled-components";
import { Link } from "react-scroll";

const Brand = () => {
  return (
    <Link to="home" spy={true} smooth={true} duration={500}><Text>SHARATH</Text></Link>
  )
}

export default Brand

const Text = styled.div`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  padding-top: 15px;
  padding-left: 30px;
  cursor: pointer;
  color: white;
  height: 85%;
`;
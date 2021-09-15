import React, {Component} from 'react';
import { FaGithub, FaLinkedin,FaDev, FaMedal} from 'react-icons/fa';
import './css/Footer.css';

class Footer extends Component{
  render() {
   return(   
    <div className="footerContainer">
        <a href="https://www.linkedin.com/in/palathingal/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a>
        <a href="https://github.com/therealsharath/" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://devpost.com/therealsharath/" target="_blank" rel="noopener noreferrer"><FaMedal/></a>
        <a href="https://dev.to/therealsharath" target="_blank" rel="noopener noreferrer"><FaDev/></a>
    </div>
   )}
}

export default Footer;
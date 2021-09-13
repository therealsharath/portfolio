import React, {Component} from 'react';
import { FaTwitter,FaGithub, FaLinkedin,FaDev } from 'react-icons/fa';
import './css/Footer.css';

class Footer extends Component{
  render() {
   return(   
    <div className="footerContainer">
        <a href="https://www.linkedin.com/in/palathingal/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a>
        <a href="https://github.com/therealsharath/" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/therealshrth/" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
        <a href="https://dev.to/therealsharath" target="_blank" rel="noopener noreferrer"><FaDev/></a>
    </div>
   )}
}

export default Footer;
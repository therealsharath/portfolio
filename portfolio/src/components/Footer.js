import React, {Component} from 'react';
import { FaTwitter,FaGithub, FaLinkedin,FaDev } from 'react-icons/fa';
import './Footer.css';

class Footer extends Component{
  render() {
   return(   
    <div className="footerContainer">
        <a href="https://www.linkedin.com/in/palathingal/" target="_blank"> <FaLinkedin/></a>
        <a href="https://github.com/therealsharath/" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/therealshrth/" target="_blank"><FaTwitter/></a>
        <a href="https://dev.to/therealsharath" target="_blank"><FaDev/></a>
    </div>
   )}
}

export default Footer;
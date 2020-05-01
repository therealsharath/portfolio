import React from 'react';
import './About.css';
import Headshot from '../Headshot.jpeg';

const tech = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    'https://2ality.com/2011/10/logo-js/js.jpg',
    'https://www.pngkit.com/png/full/101-1010012_c-programming-icon-c-programming-language-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
    'https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png',
    'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png',
    'https://cdn.auth0.com/blog/react-js/react.png',
    'https://starllysolutions.com/img/django.png',
    'https://staging.contentsquare.com/wp-content/uploads/2019/01/AWS_Logo@3x-8-1200x1200.png',
    'https://img.icons8.com/color/480/firebase.png',
    'https://lh3.googleusercontent.com/proxy/vc48fw5vLilWr4KNdZdwI0rgbqRhMP99hlariSGGOKtQa-WIh9eSMH9Dycf0NYTdA9UyE9wA22yFEWEEowLYm9HtEhX3eW3TIHQLAZaMiZeBwF35H_s7QOsObuWXascj4aU0lg',

]

function About() {
    return(
        <div id="about" className="aboutContainer">
            <div className="photoWrapper">
                <img className="photo" src={Headshot}/>
            </div>
            <div className="aboutWrapper">
                <font className="aboutTitle">What do I do?</font>
                <div className="aboutContent">
                    I am here to innovate. 
                    My goal to reach 7.5 billion people from a corner of my room.
                    I primarily focus on the applications of Artificial Intelligence and using Web and Mobile Internetworks to deliver AI to people.
                </div>
                <font className="aboutTitle">I work with...</font>
                <div className="aboutTech">
                {tech.map(obj => (
                    <img src={obj} className="aboutTn"/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default About;
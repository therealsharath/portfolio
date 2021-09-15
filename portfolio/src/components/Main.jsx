import React from 'react';
import Navbar from './navbar/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Footer from './Footer.jsx';
import './css/Main.css';

function Main() {
    return(
        <div>
            <video className="bgVideo" controls autoPlay muted loop onLoad={console.log("Video loaded")}>
                <source src={process.env.PUBLIC_URL + './videos/bgVideo.mp4'}></source>
            </video>
            <Navbar/>
            <Home/>
            <About/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default Main;

import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';
import bg from '../bgVideo.mp4';
import './Main.css';

function Main() {
    return(
        <div>
            <video className="bgVideo" controls autoPlay muted loop>
                <source src={bg}></source>
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

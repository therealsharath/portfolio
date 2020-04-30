import React from 'react';
import Popup from "reactjs-popup";
import {FaPlayCircle} from 'react-icons/fa';
import mainVid from '../mainVideo.mp4';
import './Home.css';

function Home() {
    return(
        <div id="home" className="appHome">
            <div className="mainTitle">
                Sharath
                <br/>
                Palathingal
            </div>
            <div className="buttons">
                <a href="/story" className="story">My Story</a>
                <Popup trigger={
                    <div className="play">
                        <FaPlayCircle className="icon"/>
                        Watch Video
                    </div>
                } className="template" modal> 
                    {close => (
                    <div className="modal">
                        <a className="close" onClick={close}>
                        &times;
                        </a>
                        <video className="content" controls autoPlay>
                            <source src={mainVid}></source>
                        </video>
                    </div>
                    )}
                </Popup>
            </div>
        </div>
    )
}

export default Home;

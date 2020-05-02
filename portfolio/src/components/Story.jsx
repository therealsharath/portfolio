import React from 'react';
import Timeline from './Timeline.jsx';
import Fade from 'react-reveal/Fade';
import storyVid from '../storyVid.mp4';
import { FaChevronCircleLeft } from 'react-icons/fa';
import './Story.css';

function Story() {
    return(
        <div className="storyHolder">
            <video className="storyVideo" autoPlay muted loop>
                <source src={storyVid}></source>
            </video>
            <Fade top>
            <a href="/" className="goBack">
                <FaChevronCircleLeft/>
                <font className="backText">Website</font>
            </a>
            </Fade>
            <div className="storyContent">
                <font className="storyTitle">My Story</font>
                <Timeline/>
            </div>
        </div>

    )
}

export default Story;
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {FaPlayCircle} from 'react-icons/fa';
import mainVid from '../mainVideo.mp4';
import './css/Home.css';

function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div id="home" className="appHome">
            <div className="mainTitle">
                Sharath
                <br/>
                Palathingal
            </div>
            <div className="buttons">
                <a href="#/story" className="story">My Story</a>
                <div className="play" onClick={handleShow}>
                    <FaPlayCircle className="icon"/>
                    Watch Video
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered dark size="xl">
                <Modal.Header closeButton>
                    <Modal.Title className="subTitle">Who am I?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <video className="mainVideo" controls autoPlay>
                        <source src={mainVid}></source>
                    </video>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home;

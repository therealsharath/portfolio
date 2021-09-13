import React from 'react';
import { Timeline, Event } from 'react-trivial-timeline';
import Fade from 'react-reveal/Fade';
import { FaChevronCircleLeft } from 'react-icons/fa';
import Footer from './Footer.jsx';
import storyVid from '../storyVid.mp4';
import './css/Story.css';

function Story() {
    return(
        <div>
        <div className="storyHolder">
            <video className="storyVideo" autoPlay muted loop>
                <source src={storyVid}></source>
            </video>
            <Fade top>
            <a href="/portfolio" className="goBack">
                <FaChevronCircleLeft/>
                <font className="backText">Website</font>
            </a>
            </Fade>
            <div className="storyContent">
                <font className="storyTitle">Milestones</font>
                <Timeline >
                    <Event intervalBackground="#e8bc53" lineColor="#e8bc53" interval="2015 – 2019" title="Bright Riders School">
                        High School
                    </Event>
                    <Event intervalBackground="#add8e6" lineColor="#fff" interval="2015 – 2016" title="House Prefect">
                        One of two appointed prefects in-charge of coordinating creative & athletic events.
                    </Event>
                    <Event lineColor="#fff" interval={{ start: 2016 }} title="Master of Ceremonies">
                        Hosted several events for audiences consisting of upto a thousand people.
                    </Event>
                    <Event intervalBackground="#add8e6" lineColor="#fff" interval="2017 – 2018" title="House Captain">
                        Youngest captain in the school's history. Primarily in-charge of planning, curating anf coordinating events for over 500 students.
                    </Event>
                    <Event lineColor="#fff" interval="2018 – 2019" title="Head Boy">
                        Unanimously elected by over 400 students to lead the student body, shape school policies and foster ties with other schools.
                    </Event>
                    <Event intervalBackground="#e3cb92" lineColor="#fff" interval="June - August 2018" title="Trans Emirates">
                        First technical internship where I was in-charge of documenting and updating a database of petroleum consumption by pickup trucks to optimize routes.
                    </Event>
                    <Event intervalBackground="#fc816d" lineColor="#fff" interval="April - August 2019" title="CYNEX Tender">
                        Appointed as the Head of Operations of a startup at seed funding stage, primarily tasked with designing the flow of operations and implementing payments to an online interface.
                    </Event>
                    <Event intervalBackground="#e8bc53" lineColor="#e8bc53" interval={{ start: 2020 }} title="Georgia Institute of Technology">
                        Candidate for Bachelor of Science in Computer Science<br/>
                        GPA: 4.0
                    </Event>
                    <Event intervalBackground="#ff9469" lineColor="#fff" interval={{ start: 2019 }} title="Bits of Good">
                        Junior Developer working towards developing software for non-profits. 
                        Worked on team Mapscout, creating a interactive resource map that connects 
                        patients with behavioral health services.
                    </Event>
                    <Event lineColor="#fff" interval="2019 – 2020" title="Finance Chair">
                        Part of a Hall Council elected by the residents of International House, Matheson & Perry to manage
                        funds, plan events and foster interaction among residents. Won best hall council of the year.
                    </Event>
                    <Event intervalBackground="#b58fe3" lineColor="#fff" interval="October 2019" title="HackGT 6">
                        Developed MileSnap, Winner of the PDI challenge with team Biriyani Bandits. I primarily
                        developed the frontend portion of the cross-platform application.
                    </Event>
                    <Event intervalBackground="#ff6663" lineColor="#fff" interval={{ start: 2020 }} title="The Short Answer">
                        A personal project which aims to better explain the application process for institutions
                        in the United States to International students.
                    </Event>
                </Timeline>
            </div>
        </div>
        <Footer/>
        </div>

    )
}

export default Story;
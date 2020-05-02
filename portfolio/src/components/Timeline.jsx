import React from 'react';
import './Timeline.css';

function Timeline() {
    return(
        <div className="storyWrapper">
            <div className="timeline">
                <div className="timeline-fff"><br/></div>
                <div className="spacer"><br/></div>
                <a onClick={() => console.log("Clicked")} className="circle"><br/></a>
                <div className="spacer"><br/></div>
            </div>
        </div>
    )
}

export default Timeline;
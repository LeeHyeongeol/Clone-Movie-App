import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>About this page : I built it myself</span>;
            <span>Lee Hyeon geol</span>
        </div>
    )
}

export default About;
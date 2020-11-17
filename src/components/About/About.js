import React from 'react';
import img from "../../assets/People.jpg";
import "../../scss/_about.scss"

const About = () => {
    return (
        <div className="about_container" id="aboutcontainer">
            <div className="about_container-content"> asdasdasda</div>
            <div className="about_container-photo">
                <img src={img} alt="people_photo"/>
            </div>
        </div>
    );
};

export default About;
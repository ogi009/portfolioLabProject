import React from 'react';
import img from "../../assets/People.jpg";
import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg"
import "../../scss/_about.scss"

const About = () => {
    return (
        <div className="about_container" id="aboutcontainer">
            <div className="about_container-content">
                <h1>O nas</h1>
                <img src={decoration} alt="decoration_icon"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="user_signature"/>
            </div>
            <div className="about_container-photo">
                <img src={img} alt="people_photo"/>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import decoration from "../../assets/Decoration.svg";
import shirtIcon from "../../assets/Icon-1.svg";
import basketIcon from "../../assets/Icon-2.svg";
import bigIcon from "../../assets/Icon-3.svg";
import recycleIcon from "../../assets/Icon-4.svg";
import "../../scss/_4steps.scss"
import {Link} from "react-router-dom";

const EasySteps = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "#3C3C3C",
    }
    return (
        <div className="steps_container" id="4steps_container">
            <div className="steps_container-title">
                <p>Wystarczą 4 proste kroki</p>
                <img src={decoration} alt="icon"/>
            </div>
            <div className="steps_container-icons">
                <div>
                    <img src={shirtIcon} alt="shirt_icon"/>
                    <p>Wybierz rzeczy</p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <img src={basketIcon} alt="basket_icon"/>
                    <p>Spakuj je</p>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <img src={bigIcon} alt="big_icon"/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <img src={recycleIcon} alt="recycle_icon"/>
                    <p>Zamów kuriera</p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div>
                <Link to={"/logIn"} style={linkStyle}><p className="link_text4">ODDAJ RZECZY</p></Link>
            </div>
        </div>
    );
};

export default EasySteps;
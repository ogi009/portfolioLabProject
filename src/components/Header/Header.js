import React from 'react';
import {Link} from "react-router-dom";
import "./_header.scss";


const Header = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#3C3C3C",
    }
    return (
        <div className="container">
            <div className="img1"></div>
            <div className="content_container">
                <div className="container_links-1">
                    <Link to={"/logIn"} style={linkStyle}><p className="link_text">Zaloguj</p></Link>
                    <Link to={"/register"}  style={linkStyle}><p className="link_text">Zarejestruj</p></Link>
                </div>
                <div className="nav_container">
                    <Link to={"/start"} style={linkStyle}>Start</Link>
                    <Link to={"/aboutWeb"} style={linkStyle}>O co chodzi?</Link>
                    <Link to={"/aboutUs"} style={linkStyle}>O nas</Link>
                    <Link to={"/organization"} style={linkStyle}>Fundacja i organizacja</Link>
                    <Link to={"/contact"} style={linkStyle}>Kontakt</Link>
                </div>
                <div>
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w dobre ręce</p>
                </div>
                <div>
                    <Link to={"/giveAway"}>Oddaj Rzeczy</Link>
                    <Link to={"/organize"}>Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </div>

    );
};

export default Header;
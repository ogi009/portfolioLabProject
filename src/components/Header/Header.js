import React from 'react';
import {Link} from "react-router-dom";
import "./_header.scss";
import decoration from "../../assets/Decoration.svg"

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
                    <Link to={"/register"}  style={linkStyle}><p className="link_text">Załóz konto</p></Link>
                </div>
                <div className="nav_container">
                    <Link to={"/start"} style={linkStyle}><p className="link_text2">Start</p></Link>
                    <Link to={"/aboutWeb"} style={linkStyle}><p className="link_text2">O co chodzi?</p></Link>
                    <Link to={"/aboutUs"} style={linkStyle}><p className="link_text2">O nas</p></Link>
                    <Link to={"/organization"} style={linkStyle}><p className="link_text2">Fundacja i organizacja</p></Link>
                    <Link to={"/contact"} style={linkStyle}><p className="link_text2">Kontakt</p></Link>
                </div>
                <div className="main_container">
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={decoration}/>
                    <div className="main_container-links">
                        <Link to={"/giveAway"} style={linkStyle}><p className="link_text3">ODDAJ RZECZY</p></Link>
                        <Link to={"/organize"} style={linkStyle}><p className="link_text3">ZORGANIZUJ ZBIÓRKĘ</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;
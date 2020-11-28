import React from 'react';
import '../../scss/_nav.scss';
import '../../scss/_login.scss';
import {Link} from "react-router-dom";
import decoration from '../../assets/Decoration.svg';


const LogOut = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#3C3C3C",
    }
    return (
        <>
            <div className="logIn_container">
                <div className="logIn_container_links-1">
                    <Link to={"/"} style={linkStyle}><p className="link_text">Strona Głowna</p></Link>
                    <Link to={"/LogIn"} style={linkStyle}><p className="link_text">Zaloguj</p></Link>
                    <Link to={"/register"} style={linkStyle}><p className="link_text link_text-border">Załóż konto</p>
                    </Link>
                </div>
                <div className="logIn_container-content logout">
                    <h1>Wylogowanie nastąpiło pomyślnie</h1>
                    <img src={decoration} alt="decoration_icon"/>
                    <Link to={"/"} style={linkStyle}><p className="logOut_button">Strona Głowna</p></Link>
                </div>
            </div>
        </>
    );
};

export default LogOut;
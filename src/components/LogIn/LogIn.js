import React from 'react';
import Nav from "../Nav/Nav";
import '../../scss/_nav.scss';
import '../../scss/_login.scss';
import {Link} from "react-router-dom";
import decoration from '../../assets/Decoration.svg'

const LogIn = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#3C3C3C",
    }
    return (
        <>
            <div className="logIn_container">
                <div className="logIn_container_links-1">
                    <Link to={"/LogIn"} style={linkStyle}><p className="link_text">Zaloguj</p></Link>
                    <Link to={"/register"}  style={linkStyle}><p className="link_text">Załóz konto</p></Link>
                </div>
                <div className="navi">
                    <Nav/>
                </div>

                <div className="logIn_container-content">
                    <h1>Zaloguj się</h1>
                    <img src={decoration} alt="decoration_icon"/>
                    <form className="logIn_form">
                        <label>Email
                            <input/>
                        </label>
                        <label>Hasło
                            <input/>
                        </label>
                    </form>
                    <div className="logIn_buttons">
                        <Link to={"/register"}><button>Załóż konto</button></Link>
                        <button>Zaloguj się</button>
                    </div>
                </div>
        </div>
            </>
    );
};

export default LogIn;
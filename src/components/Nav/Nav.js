import React from 'react';
import {Link} from "react-scroll";
import "../../scss/_nav.scss"

const Nav = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#3C3C3C",
    }
    return (
        <div className="nav_container">
            <Link
                activeClass="active"
                to="threecolumns"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={linkStyle}><p className="link_text2">Start</p></Link>
            <Link activeClass="active"
                  to="4steps_container"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={linkStyle}><p className="link_text2">O co chodzi?</p>
            </Link>
            <Link activeClass="active"
                  to="aboutcontainer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={linkStyle}><p className="link_text2">O nas</p>
            </Link>
            <Link
                activeClass="active"
                to="whoWeHelp_container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={linkStyle}><p className="link_text2">Fundacja i organizacja</p></Link>
            <Link
                activeClass="active"
                to="footer_container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={linkStyle}><p className="link_text2">Kontakt</p></Link>
        </div>
    );
};

export default Nav;
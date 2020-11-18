import React from 'react';
import img from "../../assets/Background-Contact-Form.jpg";
import decoration from "../../assets/Decoration.svg"
import "../../scss/_footer.scss";
import icon1 from "../../assets/Facebook.svg";
import icon2 from "../../assets/Instagram.svg";

const Footer = () => {
    return (
        <div className="footer_container" id="footer_container">
            <img src={img} alt="background_photo" className="background_photo"/>
            <div className="form_container">
                <form className="form">
                    <div className="form1">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={decoration} alt="decoration_icon"/>
                    </div>
                    <div className="input_container">
                        <label>
                            Wpisz swoję imię
                            <input placeholder="Kuba"/>
                        </label>
                        <label>
                            Wpisz swój email
                            <input placeholder="kub@mail.com"/>
                        </label>

                    </div>
                    <div className="textarea_container">
                        <label>
                            Wpisz treść wiadomości
                        </label>
                        <textarea></textarea>
                        <button>Wyślij</button>
                    </div>
                </form>
            </div>

            <footer>
                <p>Copyright by Jakub Juras</p>
                <div>
                    <a href="http://facebook.pl"><img src={icon1} alt="facebook_icon"/></a>
                    <a  href="http://instagram.com"><img src={icon2} alt="instagram_icon"/></a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;
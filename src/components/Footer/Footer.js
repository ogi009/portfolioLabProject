import React from 'react';
import img from "../../assets/Background-Contact-Form.jpg";
import decoration from "../../assets/Decoration.svg"
import "../../scss/_footer.scss";
import icon1 from "../../assets/Facebook.svg";
import icon2 from "../../assets/Instagram.svg";
import {useForm} from "react-hook-form";

const Footer = () => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";
        fetch(`${API}`, {
                method: "POST"
                ,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <div className="footer_container" id="footer_container">
            <img src={img} alt="background_photo" className="background_photo"/>
            <div className="form_container">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <div className="form1">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={decoration} alt="decoration_icon"/>
                    </div>
                    <div className="input_container">
                        <label>
                            Wpisz swoję imię
                            <input name="name" ref={register({required: true, minLength: 3})}/>
                            {errors.name && <span style={{fontWeight: "bold", color: "red"}}>Imię jest za krótkie</span>}
                        </label>
                        <label>
                            Wpisz swój email
                            <input name="email"
                                   ref={register({pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}/>
                            {errors.email && <span style={{fontWeight: "bold", color: "red"}}>Wpisz prawdiłowy email</span>}
                        </label>
                    </div>
                    <div className="textarea_container">
                        <label>
                            Wpisz treść wiadomości
                        </label>
                        <textarea name="textarea" ref={register({required: true, minLength: 120})}/>
                        {errors.textarea && <span style={{fontWeight: "bold", color: "red"}}>Wiadomość musi mieć conajmniej 120 znaków</span>}
                        <button type="submit">Wyślij</button>
                    </div>
                </form>
            </div>

            <footer>
                <p>Copyright by Jakub Juras</p>
                <div>
                    <a href="http://facebook.pl"><img src={icon1} alt="facebook_icon"/></a>
                    <a href="http://instagram.com"><img src={icon2} alt="instagram_icon"/></a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;
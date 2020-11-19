import React from 'react';
import '../../scss/_nav.scss';
import '../../scss/_login.scss';
import {Link} from "react-router-dom";
import decoration from '../../assets/Decoration.svg';
import {useForm} from "react-hook-form";

const LogIn = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
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
                    <Link to={"/register"} style={linkStyle}><p className="link_text link_text-border">Załóż konto</p></Link>
                </div>
                <div className="logIn_container-content">
                    <h1>Zaloguj się</h1>
                    <img src={decoration} alt="decoration_icon"/>
                    <form onSubmit={handleSubmit(onSubmit)} className="logIn_form">
                        <label>Email
                            <input name="logInEmail"
                                   ref={register({pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}/>
                            {errors.logInEmail && <span style={{fontWeight: "bold", color: "red"}}>Wpisz prawdiłowy email</span>}
                        </label>
                        <label>Hasło
                            <input name="password" ref={register({required: true, minLength: 6})}/>
                            {errors.password && <span style={{fontWeight: "bold", color: "red"}}>Hasło musi mieć przynajmniej 6 znaków</span>}
                        </label>
                        <div className="logIn_buttons">
                            <Link to={"/register"}>
                                <button>Załóż konto</button>
                            </Link>
                            <button type="submit">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;
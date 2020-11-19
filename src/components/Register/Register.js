import React from 'react';
import '../../scss/_nav.scss';
import '../../scss/_register.scss';
import {Link} from "react-router-dom";
import decoration from '../../assets/Decoration.svg';
import {useForm} from "react-hook-form";

const Register = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    const linkStyle = {
        textDecoration: "none",
        color: "#3C3C3C",
    }
    return (
        <>
            <div className="logIn_container2">
                <div className="logIn_container_links-2">
                    <Link to={"/"} style={linkStyle}><p className="link_text">Strona Głowna</p></Link>
                    <Link to={"/LogIn"} style={linkStyle}><p className="link_text">Zaloguj</p></Link>
                    <Link to={"/register"}  style={linkStyle}><p className="link_text link_text-border">Załóż konto</p></Link>
                </div>
                <div className="logIn_container-content2">
                    <h1>Załóż konto</h1>
                    <img src={decoration} alt="decoration_icon"/>
                    <form onSubmit={handleSubmit(onSubmit)} className="logIn_form2">
                        <label>Email
                            <input name="registerEmail"
                                   ref={register({pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}/>
                            {errors.registerEmail && <span style={{fontWeight: "bold", color: "red"}}>Wpisz prawdiłowy email</span>}
                        </label>
                        <label>Hasło
                            <input name="registerpassword" ref={register({required: true, minLength: 6})}/>
                            {errors.registerpassword && <span style={{fontWeight: "bold", color: "red"}}>Hasło musi mieć przynajmniej 6 znaków</span>}
                        </label>
                        <label>Powtórz hasło
                            <input name="registerpassword2" ref={register({ validate: value => value === '123456'})}/>
                            {errors.registerpassword2 && <span style={{fontWeight: "bold", color: "red"}}>Hasła muszą być takie same</span>}
                        </label>
                        <div className="logIn_buttons2">
                            <Link to={"/LogIn"}><button>Zaloguj się</button></Link>
                            <button>Załóż konto</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Register;
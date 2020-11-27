import React from 'react';
import {useState} from 'react'
import decoration from "../../assets/Decoration.svg";
import "../../scss/_whowehelp.scss";

import Fundation1 from "./Fundations/Fundation1";
import Organization1 from "./Organizations/Organization1";


const WhoWeHelp = () => {
    const [show1, setShow1] = useState("block");
    const [show2, setShow2] = useState("none");
    const [show3, setShow3] = useState("none");

    const handleClick = () => {
        setShow1("block")
        setShow2("none")
        setShow3("none")
    }
    const handleClick2 = () => {
        setShow1("none")
        setShow2("block")
        setShow3("none")
    }
    const handleClick3 = () => {
        setShow1("none")
        setShow2("none")
        setShow3("block")
    }
    return (
        <section className="whoWeHelp_container" id="whoWeHelp_container">
            <article>
                <h1>Komu pomagamy?</h1>
                <img src={decoration} alt="decoration_photo"/>
                <div className="whoWeHelp_buttons">
                    <p onClick={handleClick}>Fundacjom</p>
                    <p onClick={handleClick2}>Organizacjom <br></br>samorządowym</p>
                    <p onClick={handleClick3}>Lokalnym <br></br> zbiórkom</p>
                </div>
            </article>
            <section style={{display: show2, height: "100%"}}>
                <p className="whoWeHelp_container-text whoWeHelp_container-text2">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Amet
                    ducimus exercitationem explicabo modi quibusdam. Accusantium aliquid consequuntur delectus
                    necessitatibus. Alias blanditiis ea enim et modi rerum sequi vel. Asperiores assumenda consequuntur
                    fuga incidunt iusto mollitia nulla quaerat quia repellat similique! </p>
                <Organization1/>
            </section>
            <section style={{display: show1, height: "100%"}}>
                <p className="whoWeHelp_container-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                    którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <Fundation1/>

            </section>
            <section style={{display: show3, height: "100%"}}>
                <p className="whoWeHelp_container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation.</p>
                <div className="organization_container organization_container1">
                    <div className="foundation">
                        <h1>Zbiórka “Lorem Ipsum 1”</h1>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <p className="foundation2">Egestas, sed, tempus</p>
                </div>
                <div className="organization_container organization_container1">
                    <div className="foundation">
                        <h1>Zbiórka “Lorem Ipsum 2”</h1>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <p className="foundation2">Ut, aliquam, purus, sit, amet</p>
                </div>
                <div className="organization_container">
                    <div className="foundation">
                        <h1>Zbiórka “Lorem Ipsum 3"</h1>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <p className="foundation2">Mi, quis, hendrerit, dolor</p>
                </div>

            </section>
        </section>

    );
};

export default WhoWeHelp;
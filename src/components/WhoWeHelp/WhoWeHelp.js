import React from 'react';
import decoration from "../../assets/Decoration.svg";
import "../../scss/_whowehelp.scss"

const WhoWeHelp = () => {
    return (
        <div className="whoWeHelp_container" id="whoWeHelp_container">
           <div>
               <h1>Komu pomagamy?</h1>
                <img src={decoration} alt="decoration_photo"/>
                <div className="whoWeHelp_buttons">
                    <p>Fundacjom</p>
                    <p>Organizacjom <br></br>samorządowym</p>
                    <p>Lokalnym zbiórkom</p>
                </div>
                <p className="whoWeHelp_container-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus exercitationem explicabo modi quibusdam. Accusantium aliquid consequuntur delectus necessitatibus. Alias blanditiis ea enim et modi rerum sequi vel. Asperiores assumenda consequuntur fuga incidunt iusto mollitia nulla quaerat quia repellat similique!   </p>
           </div>
            <div>
                <div className="organization_container organization_container1">
                    <div className="organization_container-content">
                        <h1>Organizacja “Lorem Ipsum 1”</h1>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                        <p>Egestas, sed, tempus</p>
                </div>
                <div className="organization_container organization_container2">
                    <div className="organization_container-content">
                        <h1>Organizacja “Lorem Ipsum 2”</h1>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <p>Ut, aliquam, purus, sit, amet</p>
                </div>
                <div className="organization_container">
                    <div className="organization_container-content">
                        <h1>Organizacja “Lorem Ipsum 3”</h1>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <p>Mi, quis, hendrerit, dolor</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeHelp;
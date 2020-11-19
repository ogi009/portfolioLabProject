import React from 'react';
import '../../../scss/_whowehelp.scss'

const Fundation1 = () => {
    return (
        <>
            <div className="organization_container organization_container1">
                <div className="organization_container-content">
                    <h1>Fundacja “Dbam o Zdrowie”</h1>
                    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                </div>
                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
            </div>
            <div className="organization_container organization_container1">
                <div className="organization_container-content">
                    <h1>Fundacja “Dla dzieci”</h1>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <p>ubrania, meble, zabawki</p>
            </div>
            <div className="organization_container">
                <div className="organization_container-content">
                    <h1>Fundacja “Bez domu”</h1>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                </div>
                <p>ubrania, jedzenie, ciepłe koce</p>
            </div>
        </>
    );
};

export default Fundation1;
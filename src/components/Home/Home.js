import React from 'react';
import Header from "../Header/Header";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import EasySteps from "../4Steps/4Steps";
import About from "../About/About";
import WhoWeHelp from "../WhoWeHelp/WhoWeHelp";


const Home = () => {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <About/>
            <WhoWeHelp/>
        </>
    );
};

export default Home;
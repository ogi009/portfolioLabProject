import React from 'react';
import Header from "../Header/Header";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import EasySteps from "../4Steps/4Steps";
import About from "../About/About";
import WhoWeHelp from "../WhoWeHelp/WhoWeHelp";
import Footer from "../Footer/Footer";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

const Home = () => {
    return (
        <>
            <ScrollArrow/>
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <About/>
            <WhoWeHelp/>
            <Footer/>
        </>
    );
};

export default Home;
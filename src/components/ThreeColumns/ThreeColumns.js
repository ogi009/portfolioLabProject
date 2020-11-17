import React from 'react';
import "../../scss/_threeColumns.scss";

const ThreeColumns = () => {
    return (
        <div className="threeColumns_container" id="threecolumns">
            <div className="threeColumns_container-content">
                <p className="threeColumns_container-title">10</p>
                <p className="threeColumns_container-title2">ODDANYCH WORKÓW</p>
                <p className="threeColumns_container-title3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore explicabo inventore libero necessitatibus placeat ut voluptates!</p>
            </div>
            <div className="threeColumns_container-content">
                <p className="threeColumns_container-title">5</p>
                <p className="threeColumns_container-title2">WSPARTYCH ORGANIZACJI</p>
                <p className="threeColumns_container-title3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus excepturi iure molestias quibusdam reprehenderit sit voluptatem.</p>
            </div>
            <div className="threeColumns_container-content">
                <p className="threeColumns_container-title">7</p>
                <p className="threeColumns_container-title2">ZORGANIZOWANYCH ZBIÓREK</p>
                <p className="threeColumns_container-title3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at eligendi error facilis laborum maxime tempore velit?</p>
            </div>
        </div>
    );
};

export default ThreeColumns;
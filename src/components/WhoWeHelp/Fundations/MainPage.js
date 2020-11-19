import React from 'react';
import {Link} from "react-router-dom";
import Fundations from "./Fundations";
import "../../../scss/_mainpagination.scss"

const MainPagination = () => {
    return (
        <div>
           <Fundations/>
            <div className="mainpagination_buttons">
                <Link to="/Fundation1"><button>1</button></Link>
                <Link to='/Fundation2'><button>2</button></Link>
            </div>
        </div>

    );
};

export default MainPagination;
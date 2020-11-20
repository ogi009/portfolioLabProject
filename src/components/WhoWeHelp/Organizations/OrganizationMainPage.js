import React from 'react';
import {Link} from "react-router-dom";
import Organizations from "./Organizations";
import "../../../scss/_mainpagination.scss"

const OrganizationMainPage = () => {
    return (
        <div>
            <Organizations/>
            <div className="mainpagination_buttons">
                <Link to="/Organization1"><button>1</button></Link>
                <Link to='/Organization2'><button>2</button></Link>
                <Link to='/Organization3'><button>3</button></Link>
            </div>
        </div>

    );
};

export default OrganizationMainPage;
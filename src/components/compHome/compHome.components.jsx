import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./compHome.styles.scss";

const CompHome = ()=>{
    return(
        <div id="compHomeComponent">
            <Link to={"/"}><h1>Back to Store</h1></Link>
            <Outlet/>
        </div>
    );
}

export default CompHome;
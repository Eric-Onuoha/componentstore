import React from "react";
import { Link } from "react-router-dom";

import "./compNav.styles.scss";

const CompNav = () => {
    return(
        <div id="compNavComponent">
            <Link className="compNav" to={"login"}><p>Login w PopUp</p></Link>
            <Link className="compNav" to={"login2"}><p>Login w Redirect</p></Link>
            <Link className="compNav" to={""}><p>Image Upload</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
        </div>
    )
}

export default CompNav;
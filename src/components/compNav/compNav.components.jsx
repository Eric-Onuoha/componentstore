import React from "react";
import { Link } from "react-router-dom";

import "./compNav.styles.scss";

const CompNav = () => {
    return(
        <div id="compNavComponent">
            <Link className="compNav" to={"login"}><p>Login w PopUp</p></Link>
            <Link className="compNav" to={"login2"}><p>Login w Redirect</p></Link>
            <Link className="compNav" to={"signin"}><p>SignIn w Email plain useContext</p></Link>
            <Link className="compNav" to={"signin2"}><p>SignIn w Email</p></Link>
            <Link className="compNav" to={"register"}><p>Register w Email</p></Link>
            <Link className="compNav" to={"postfirestore"}><p>Post to Firestore</p></Link>
            <Link className="compNav" to={"getfirestore"}><p>Get from Firestore</p></Link>
            <Link className="compNav" to={""}><p>Image Upload</p></Link>
            <Link className="compNav" to={""}><p>Empty</p></Link>
        </div>
    )
}

export default CompNav;
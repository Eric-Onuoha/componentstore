import React from "react";
import "./login.styles.scss";

import {signInWithGooglePopUp, getUserDocFromAuth} from "../loginWithGooglePopUp/login.firebase.utils";

const loginUser = async () => {
    const {user} = await signInWithGooglePopUp();
    getUserDocFromAuth(user);
}

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            {/* <form action="#" method="post"> */}
                <input type="text" />
                <input type="password" />
                <button type="submit">Local Login</button>
                <button type="submit" onClick={loginUser}>Google PopUp Login</button>
                <button type="submit">Google Register</button>
            {/* </form> */}
        </div>
    )
}

export default Login;
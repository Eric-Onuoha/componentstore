import React from "react";
import "./login.styles.scss";
import { getRedirectResult } from "firebase/auth";
import {auth, signInWithGoogleRedirect, getUserDocFromAuth} from "../loginWithGoogleRedirect/login.firebase.utils";
import { useEffect } from "react";


const Login2 = () => {
    
    useEffect(() => {
        const loginUser = async () => {
            const {user} = await getRedirectResult(auth);
            if(user){
                getUserDocFromAuth(user);
            }
            return auth;
        }
        loginUser();
    }, []);
    
    return(
        <div>
            <h1>Login</h1>
            {/* <form action="#" method="post"> */}
                <input type="text" />
                <input type="password" />
                <button type="submit" onClick={signInWithGoogleRedirect}>Google Redirect Login</button>
            {/* </form> */}
        </div>
    )
}

export default Login2;
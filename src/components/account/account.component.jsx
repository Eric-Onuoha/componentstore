import React from "react";
import { useState } from "react";
import { signIn, signInWithGooglePopUp } from "./signIn.firebase.utils";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addCurrentUser } from "../../reduxStore/actionDispatches";
import "./account.styles.scss";

const Account = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    const defaultFormFields = {
        email:"",
        password:"",
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const loginWithEmail = async (event)=> {
        event.preventDefault();

        try{
            const {user} = await signIn(email, password);
            // dispatch(addCurrentUser(user.email))
            // navigate("/admin/cms");
            alert(user)
        } catch(error){
            alert(error.message);
        }

    }

    const loginWithGoogle = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInWithGooglePopUp();
            alert(user.email);
        } catch(error){
            alert(error);
        }
    }

    return(
        <div id="aunthenticatorComponent">
            <h1>Sign In as WIPF admin</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password}/>
                <button type="submit" onClick={loginWithEmail}>Login</button>
                <button type="submit" onClick={loginWithGoogle}>Login With Google</button>
                <p>Don't have an account? Find an existing account holder to help you create one</p>
            </form>
        </div>
    )
};

export default Account;
import React, {useState} from "react";
import { signIn } from "./SignInWithReducer.firebase.utils";

const SignInWithReducer = () => {
    const defaultForm = {
        username: "",
        password: ""
    }

    const [formFields, setFormFields] = useState(defaultForm);
    const {username, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {user} = await signIn(username, password);
        console.log(user);
    }

    return (
        <div id="signInWithReducerComponent">
            <h2>Sign In With Reducer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input onChange={handleChange} name="username" type="text" value={username} />

                <label htmlFor="username">Password</label>
                <input onChange={handleChange} name="password" type="text" value={password}/>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default SignInWithReducer;
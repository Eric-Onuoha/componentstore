import React, {useState, useContext} from "react";
import { UserContext } from "./SignInWithReducer.context";
import { signIn } from "./SignInWithReducer.firebase.utils";

const SignInWithReducer = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

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
        setCurrentUser(user);
        // console.log(user);
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

                {
                    currentUser ? (
                        <p>User: {currentUser.email}</p>
                    ) : (
                        <p>No User</p>
                    )
                }

            </form>
        </div>
    )
}
export default SignInWithReducer;
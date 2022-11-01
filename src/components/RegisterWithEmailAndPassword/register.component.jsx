import { useState } from "react";

const Register = ()=> {
    const defaultFormFields = {
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {username, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div>
            <h1>Register with Mail</h1>
            <form onChange={handleChange}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password}/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}
export default Register;


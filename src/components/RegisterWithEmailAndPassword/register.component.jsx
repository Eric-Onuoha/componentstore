import { useState } from "react";
import { createAccount, getUserDocFromAuth } from "./register.firebase.utils";

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

    const resetForm = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event)=> {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords dont match");
            return;
        }

        try{
            const {user} = await createAccount(email, password);
            await getUserDocFromAuth(user, username);
            resetForm();
        } catch(error){
            console.log(error);
        }

    }

    return(
        <div>
            <h1>Register with Mail</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={handleChange} value={username} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password}/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}
export default Register;


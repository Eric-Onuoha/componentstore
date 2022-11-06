import { useState } from "react";
import "./signIn.firebase.utils";
import { signIn } from "./signIn.firebase.utils";

const SignIn = ()=>{

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

    const resetForm = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event)=> {
        event.preventDefault();

        try{
            const response = await signIn(email, password);
            console.log(response);
        } catch(error){
            console.log(error);
        }

    }

    return(
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password}/>
                <button type="submit">Login With Email and Password</button>
            </form>
        </div>
    )
}
export default SignIn;
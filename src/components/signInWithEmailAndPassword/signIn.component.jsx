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
            console.log (response);
            resetForm();
        } catch(error){
            console.log(error);
        }

    }

    return(
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="email" />
                <input onChange={handleChange} type="password" />
                <button type="submit">Login With Email and Password</button>
            </form>
        </div>
    )
}
export default SignIn;
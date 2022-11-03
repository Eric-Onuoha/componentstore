import "./signIn.firebase.utils";

const SignIn = ()=>{

    const handleSubmit = (event)=> {
        event.preventDefault();

    } 

    return(
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" />
                <input type="password" />
                <button type="submit">Login With Email and Password</button>
            </form>
        </div>
    )
}
export default SignIn;
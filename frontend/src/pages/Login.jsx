import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault();

       await login(email,password);
    }

    return ( 
        <div className="signup" >
            <form className="signup-form" onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <label htmlFor="">Email</label>
                <input type="email"
                    onChange = {(e) => setEmail(e.target.value)}
                    value = {email}
                 />
                <label htmlFor="">Password</label>
                <input type="password"
                    onChange = {(e) => setPassword(e.target.value)}
                    value = {password}
                 />
                <p>Don't have an account? <Link to= "/sign-up">Sign Up</Link> </p>
                <button className="btn" disabled={isLoading}>{isLoading ? 'Loading...':'Login'}</button>
                {error && <div className="error">Error: {error}</div>}
            </form>
        </div>
     );
}
 
export default Login;
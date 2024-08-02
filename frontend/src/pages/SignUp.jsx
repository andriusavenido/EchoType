import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();


    const handleSubmit = async (e) =>{
        e.preventDefault();

        await signup(email, password);

    }

    return ( 
        <div className="signup">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
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
                 <p>Have an account? <Link to= "/login">Log In</Link>
                 </p>
                 <button className="btn" disabled={isLoading}>{isLoading ? 'Loading...':'Register'}</button>

                 {error && <div className="error">Error: {error}</div>}
            </form>
        </div>
     );
}
 
export default SignUp;
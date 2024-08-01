import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        console.log(email, password);
    }

    return ( 
        <div className="signup">
            <form className="signup-form" onSubmit={''}>
                <h3>Sign Up</h3>
                <label htmlFor="">Email:</label>
                <input type="email"
                    onChange = {(e) => setEmail(e.target.value)}
                    value = {email}
                 />
                <label htmlFor="">Password:</label>
                <input type="password"
                    onChange = {(e) => setPassword(e.target.value)}
                    value = {password}
                 />
                 <p>Have an account? <Link to= "/login">Log In</Link>
                 </p>
                 <button>Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUp;
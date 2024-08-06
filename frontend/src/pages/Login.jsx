import { useState,useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { ActivePageContext } from "../context/ActivePageContext";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const {setActivePage} = useContext(ActivePageContext);
    //reset Navbar
    useEffect (() =>{
        setActivePage('');
    },[]);

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

       const loggedIn = await login(email,password);

       if (loggedIn){
        navigate('/');
       }
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
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
const Account = () => {
    const {logout} = useLogout();

    const navigate = useNavigate();

    const handleClick = () =>{
        logout();

        console.log('Logged out!');

        navigate('/');
    }
    
    return (  
        <div className="account">
            <h2>Account</h2>
            <button className="btn" onClick = {handleClick}>Logout</button>
        </div>
    );
}
 
export default Account;
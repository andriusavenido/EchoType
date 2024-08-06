import { useLogout } from "../hooks/useLogout";
import {  useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


const Account = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const handleClick = () =>{
        logout();
        navigate('/');
    }
    
    return (  
        <div className="account">
            {user && <button className="btn" onClick={handleClick}>Logout</button>}
        </div>
    );
}
 
export default Account;
import { useLogout } from "../hooks/useLogout";
import {  useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


const Account = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate('/');
    }
    
    return (  
        <div className="account">
            <div className="topscores">
                <h2>Top Records</h2>
            </div>
            {user && <button className="btn" onClick={handleLogout}>Logout</button>}
        </div>
    );
}
 
export default Account;
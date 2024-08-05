import { useLogout } from "../hooks/useLogout";
import { Link, useNavigate } from "react-router-dom";
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
            <h2>{user ? user.username : <Link to="/login" onClick={''}>Log in to see details </Link>}</h2>
            {user && <button className="btn" onClick={handleClick}>Logout</button>}
        </div>
    );
}
 
export default Account;
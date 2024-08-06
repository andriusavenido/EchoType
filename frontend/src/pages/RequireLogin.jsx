import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
const RequireLogin = () => {
    const {user} = useAuthContext();
    return ( 
        <div className="account">
            <h2>{user ? user.username : <Link to="/login" onClick={''}>Log in to see details </Link>}</h2>
        </div>
     );
}
 
export default RequireLogin;
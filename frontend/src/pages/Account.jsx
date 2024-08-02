import { useLogout } from "../hooks/useLogout";
const Account = () => {
    const {logout} = useLogout();

    const handleClick = () =>{
        logout();

        console.log('Logged out!');
    }
    
    return (  
        <div className="account">
            <h2>Account</h2>
            <button className="btn" onClick = {handleClick}>Logout</button>
        </div>
    );
}
 
export default Account;
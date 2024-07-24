import {Link} from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <Link to="">Leaderboard</Link>
                <Link to="">Forums</Link>
                <Link to="">Options</Link>
            </div>
            <h2> Echotyper</h2>
            <div className="links">
                <Link to="">About</Link>
                <Link to="">Account</Link>
                <Link className= "btn sign-up" to="">Sign Up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
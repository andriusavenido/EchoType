import { useState } from "react";
import {Link} from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

    const [activePage, setActivePage] = useState('');
    const { user } = useAuthContext();

    return (  
        <nav className="navbar">
            <div className="links">
                <Link 
                    className= {`${activePage === 'leaderboard' ? 'activePage':''}`} 
                    onClick={() => setActivePage('leaderboard')}
                to="/leaderboard">Leaderboard</Link>
                <Link 
                    className= {`${activePage === 'forums' ? 'activePage':''}`} 
                    onClick={() => setActivePage('forums')}
                to="/forums">Forums</Link>
                <Link 
                     className= {`${activePage === 'options' ? 'activePage':''}`} 
                     onClick={() => setActivePage('options')}
                to="/options">Options</Link>
            </div>

            <Link  onClick={() => setActivePage('')} to="/"><h2>Echotyper</h2></Link>
            
            <div className="links">
                <Link 
                    className= {`${activePage === 'about' ? 'activePage':''}`} 
                    onClick={() => setActivePage('about')}
                to="about">About</Link>
                <Link 
                     className= {`${activePage === 'account' ? 'activePage':''}`} 
                     onClick={() => setActivePage('account')}
                to="/Account">Account</Link>
                <Link className= "btn sign-up" to="/sign-up" onClick={() => setActivePage('')}>{ user ? user.username : 'Sign Up'}</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
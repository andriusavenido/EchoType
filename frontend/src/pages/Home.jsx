import UserTyper from "../components/UserTyper";
import { ActivePageContext } from "../context/ActivePageContext";
import { useContext,useEffect } from "react";
const Home = () => {
    const {setActivePage} = useContext(ActivePageContext);
    //reset Navbar
    useEffect (() =>{
        setActivePage('');
    },[])
    return ( 
        <div className="home">
            <UserTyper></UserTyper>
        </div>
    );
}

 
export default Home;
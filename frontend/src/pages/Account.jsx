import { useLogout } from "../hooks/useLogout";
import {  useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTypeRecordContext } from "../context/TypeRecordContext";
import { useEffect } from "react";
import Record from "../components/Record";


const Account = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const {records,dispatch} = useTypeRecordContext();

    //grab data
    useEffect(() =>{
        const fetchRecords = async () =>{
            const response = await fetch('/api/typeRecords',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok){
                dispatch({type:'SET_RECORD',payload:json})
            }
        }
        if (user){
            fetchRecords();
        }
    },[dispatch,user]);
    //add delete function

    const handleLogout = () =>{
        logout();
        navigate('/');
    }
    
    return (  
        <div className="account">
            <div className="details">
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
                {user && <button className="btn" onClick={handleLogout}>Logout</button>}
            </div>
            <div className="wrapper">
                <h2>Your Top Records</h2><hr />
                <div className="topscores">
                        {records && records.map((record)=>(
                        <Record key = {record._id} record={record}></Record>
                    ))}
                </div>
                <p><strong>Scroll to see all.</strong></p>
            </div>
        </div>
    );
}
 
export default Account;
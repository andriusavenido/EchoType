import { useLogout } from "../hooks/useLogout";
import {  useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { TypeRecordContext } from "../context/TypeRecordContext";
import { useContext, useEffect } from "react";
import Record from "../components/Record";


const Account = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const {records,dispatch} = useContext(TypeRecordContext);

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

    const handleLogout = () =>{
        logout();
        navigate('/');
    }
    
    return (  
        <div className="account">
            <div className="topscores">
                <h2>Your Top Records</h2>
                {records && records.map((record)=>(
                    <Record key = {record._id} record={record}></Record>
                ))}
            </div>
            {user && <button className="btn" onClick={handleLogout}>Logout</button>}
        </div>
    );
}
 
export default Account;
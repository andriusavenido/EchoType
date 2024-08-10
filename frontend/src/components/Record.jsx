import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTypeRecordContext } from "../context/TypeRecordContext";

const Record = ({ record }) => {

  const [visibleWords, setVisibleWords] = useState(false);
  const { user } = useAuthContext();
  const {dispatch} = useTypeRecordContext();

  const date = new Date(record.createdAt);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/New_York',
    timeZoneName: 'short'
};
  const formattedDate = date.toLocaleString('en-US', dateOptions);

  const toggleWordBank = () => {
    setVisibleWords((prev) => !prev);
  };

 //delete self function
  const deleteRecord = async() =>{
    const response = await fetch('/api/typeRecords/'+record._id,{
      method: 'DELETE',
      headers:{
          'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json();

    if (response.ok){
      dispatch({type:'DELETE_RECORD',payload:json});
    }
  }

 

  return (
    <div className="record">
      <div className="wpm"><h3>{record.wpm}</h3></div>
      <div className="recordDetails">
        <p>
        <strong>Word Bank:</strong>
        <button  onClick={toggleWordBank}>
          {visibleWords ? "Hide" : "Show"} Words
        </button>
        {visibleWords && <p> {record.word_bank}</p>}
      </p>
      <p>
        <strong>Elapsed Time: </strong>
         {record.elapsed_time} sec
      </p>
      <p>
        <strong>Date: </strong>
         {formattedDate}
      </p>
      <button  onClick={deleteRecord}>
          Delete
        </button></div>
    </div>
  );
};

export default Record;

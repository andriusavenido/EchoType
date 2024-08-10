import { useState } from "react";

const Record = ({ record }) => {
  const [visibleWords, setVisibleWords] = useState(false);

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
  const deleteRecord = () =>{

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

import { TypeRecordContext } from "../context/TypeRecordContext";
import { useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Record = ({record}) => {

        //TODO MIGHT NOT NEED
    const {dispatch} = useContext(TypeRecordContext);
    const {user} = useAuthContext();



    return (  
        <div className="record">
            <h4>{record.wpm}</h4>
            <p><strong>Word Bank:</strong>{record.word_bank}</p>
            <p><strong>Date:</strong>{record.createdAt}</p>
        </div>
    );
}
 
export default Record;
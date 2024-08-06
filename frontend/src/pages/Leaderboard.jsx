import Highscore from '../components/Highscore';
import {TypeRecordContext} from '../context/TypeRecordContext'
import { useContext } from 'react';
import { useEffect } from 'react';
const Leaderboard = () => {

    const {records, dispatch} = useContext(TypeRecordContext)

    useEffect(() => {
        const fetchRecords = async () => {
            const response = await fetch('/api/typeRecords/lb', {
            })
            
            const json = await response.json()

            if (response.ok){
                //setWorkouts(json)
                dispatch({type: 'SET_RECORD', payload: json})
                //console.log(json)
                console.log('inside')
            }
            console.log('helo')
        }

        fetchRecords()
      
    }, [dispatch])
    
    return ( 
        <div className="lb-wrapper">
            {records && records.map((hs) => (
                <Highscore key = {hs._id} username={hs.username} wpm={hs.wpm}/>
            ))} 
        </div>
     );
}
 
export default Leaderboard;
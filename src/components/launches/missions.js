import {useState} from "react";
import {Mission} from "./launch/mission";
const Missions = () => {
    let [missions,setMissions]=useState([]);
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(response=>response.json())
        .then(response=>setMissions(response))
    return(<div>
        {missions.map(mission=>(<Mission key={mission.flight_number} mission={mission}/>))}
    </div>)
}
export {Missions}

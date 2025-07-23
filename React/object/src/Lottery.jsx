import { useState} from "react";
import {randomNumber,sum} from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket] = useState(randomNumber(n));
    let isWin = winCondition(ticket);

    let handleWin = () =>{
        setTicket(randomNumber(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="container">
                <Ticket ticket={ticket}/>
            </div>
            <h2>{isWin && "Congratulations, you won! "}</h2>
            <button onClick={handleWin}>Generate Ticket</button>
        </div>
    )
}
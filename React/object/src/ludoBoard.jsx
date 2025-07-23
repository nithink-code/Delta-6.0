import { useState } from "react";

export default function ludoBoard(){
    let [moves,setMoves]  = useState({blue:0, yellow: 0, green: 0, red:0});
    let [arr,setArr] = useState(["no moves"]);

    let moveCountBlue = () =>{
        setMoves((prevMove)=>{
           return {...prevMove, blue: prevMove.blue + 1};
        });

        // setArr([...arr," blue Moves"]);
    };
    let moveCountYellow = () =>{
        setMoves((prevMove)=>{
           return {...prevMove, yellow: prevMove.yellow + 1};
        });
        // setArr([...arr," Yellow Moves"]);
    };
    let moveCountGreen = () =>{
        setMoves((prevMove)=>{
           return {...prevMove, green: prevMove.green + 1};
        });
        // setArr([...arr," Green Moves"]);
    };
    let moveCountRed = () =>{
        setMoves((prevMove)=>{
           return {...prevMove, red: prevMove.red + 1};
        });
        // setArr([...arr," Red Moves"]);
    };

    return (
        <div className="board" style={{border:"1px solid grey",borderRadius:"10px",padding:"15px"}}>
          <h4>Game Begins!</h4>
          {/* <p>{arr}</p> */}
          <p>Blue Moves = {moves.blue} </p>
          <button onClick={moveCountBlue} style={{backgroundColor:"blue"}}>+1</button>
           <p>Yellow Moves = {moves.yellow} </p>
          <button onClick={moveCountYellow} style={{backgroundColor:"yellow"}}>+1</button>
           <p>Green Moves = {moves.green} </p>
          <button onClick={moveCountGreen} style={{backgroundColor:"green"}}>+1</button>
           <p>Red Moves = {moves.red} </p>
          <button onClick={moveCountRed} style={{backgroundColor:"red"}}>+1</button>
        </div>
    );
}
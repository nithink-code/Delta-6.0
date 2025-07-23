import { useState,useEffect } from "react";

export default function Joker(){
   let[jokeEle,setJokeEle] = useState({});

    let URL = "https://official-joke-api.appspot.com/random_joke";
    
    let jokerGen= async()=>{
        let response = await fetch(URL);
        let jsonConvert = await response.json();
        setJokeEle({setup: jsonConvert.setup, punchline: jsonConvert.punchline});
    };

     // Initial Joke to Render while refreshing! [Here [] -> is the dependency that only detects when rendering ]
    useEffect(()=>{
        async function jokerGen(){
        let response = await fetch(URL);
        let jsonConvert = await response.json();
        setJokeEle({setup: jsonConvert.setup, punchline: jsonConvert.punchline});
        }
        jokerGen()
    },[]);

    return(
        <>
        <p>Joke Generator!</p>
        <h2>{jokeEle.setup}</h2>
        <h3>{jokeEle.punchline}</h3>
        <button onClick={jokerGen}>New Joke</button>
        </>
    );
}
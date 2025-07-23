import {useState} from "react";

export default function Count(){
    let [count,setCount] = useState(0);
     

    let incCount = () =>{
        setCount((currVal)=>{
            return currVal+1;
        });

        setCount((currVal)=>{
            return currVal+1;
        })
    }

    return(
        <>
         <button onClick={incCount}>Count</button>
         <p>Button was clicked for {count} times!</p>
        </>
    );

}

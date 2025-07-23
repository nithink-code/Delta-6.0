import { useState,useEffect } from "react";

export default function Count (){
    let [count,setCount] = useState(0);

    let incCount = ()=>{
        setCount(count+1);
    };

    useEffect(function(){
        console.log("Dependencies only for the count!");
    },
    [count]
   );

    return(
      <>
       <p>Count value = {count}</p>
       <button onClick={incCount}>Count</button>
      </>
    );
}
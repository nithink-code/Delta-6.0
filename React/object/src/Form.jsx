import { useState } from "react";

export default function Form(){
    let [multipleEle,setMultipleEle] = useState({
        fullName : "",
        userName:"",
        password:"",
    });

    let handleEle = (event) =>{
        let fieldName = event.target.name;
        let fieldVal = event.target.value;

        setMultipleEle((currData)=>{
             return {...currData,[fieldName] : fieldVal}
        });
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(multipleEle);

        setMultipleEle({
        fullName : "",
        userName: "",
        password: "",
        });
    }

    return(
         <>
         <form onSubmit={handleSubmit}>
            {/* Here the name value should be same as the use state objects property name  */}
            <input type="text" placeholder="Enter your Name" value={multipleEle.fullName} onChange={handleEle} name="fullName"/><br></br><br></br>
            <input type="text" placeholder="Enter your Username" value={multipleEle.userName} onChange={handleEle} name="userName"/><br></br><br></br>
            <input type="password" placeholder="Enter your Password" value={multipleEle.password} onChange={handleEle} name="password"/><br></br><br></br>
            <button >Submit</button>
         </form>
         </>
      );




}
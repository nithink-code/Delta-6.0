import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task,setTask] = useState("");
    const dispatch = useDispatch();
    
    let handleTask = (event)=>{
        setTask(event.target.value);
    };

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(task);
        setTask("");
        dispatch(addTodo(task));
    };

    return(
       <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your task" value={task} onChange={handleTask}/>&nbsp;&nbsp;
            <button>Add Task</button>
        </form>
       </>
    );
}
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp(){
    let [todos,setToDos] = useState([{task: "New Task",id: uuidv4(),isDone:false}]);
    let [newtodo, setNewTodo] = useState("");
 
    let newArr = () =>{
       setToDos([...todos,{task:newtodo,id: uuidv4(),isDone:false}]);
       setNewTodo(""); // To reset the new to do input field to empty value.
    };

    let newTodo = (event) =>{
        setNewTodo(event.target.value);  // To extract the newly entered value from i/o field.
    };
    
    let delTodo = (id) =>{
    setToDos((prevTo) => todos.filter((prevTo) => prevTo.id != id));
    };

    let upperCaseTodo = ()=>{
        setToDos(
          todos.map((todo)=>{
            return{
                ...todo,
                task : todo.task.toUpperCase(),
            }
          })
        )
    }

     let lowerCaseTodo = ()=>{
        setToDos(
          todos.map((todo)=>{
            return{
                ...todo,
                task : todo.task.toLowerCase(),
            }
          })
        )
    }

    let upperCaseOne = (id)=>{
        setToDos(
          todos.map((todo)=>{
            if(todo.id === id){
               return{
                ...todo,
                task : todo.task.toUpperCase(),
            }
            }else{
                return todo;
            }
          })
        )
    }

    let isDoneTask = (id)=>{
        setToDos(
          todos.map((todo)=>{
            if(todo.id === id ){
               return{
                ...todo,
                isDone: true,
            }
            }else{
                return todo;
            }
          })
        )
    }














    return (
        <>
        <div>
            <h2>ToDo  App!</h2>
            <input type="text" placeholder="Enter your Task" onChange={newTodo} value={newtodo}></input>&nbsp;&nbsp;
            <button onClick={newArr}>Add Task</button>
            <br></br><br></br>
            <h4>Newly Added Tasks List!</h4>
            <hr></hr>
            <ul>
                {
                todos.map((todo) => (
                <li key={todo.id}>
                <div>
                <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>
                {todo.task}
                </span>&nbsp;&nbsp;&nbsp;
                  {/* To prevent the function call of delTodo we are representing it in the arrow function form */}
                  <span><button onClick={()=> delTodo(todo.id)}>Delete</button></span>&nbsp;&nbsp;&nbsp;
                  <span><button onClick={()=> upperCaseOne(todo.id)}>UpperCase One</button></span>&nbsp;&nbsp;&nbsp;
                  <span><button onClick={()=> isDoneTask(todo.id)}>Mark as Done</button></span>
                  </div><br></br>
                  </li>
                )
                )}
            </ul>
            <span><button onClick={upperCaseTodo}>UpperCase All</button></span>&nbsp;&nbsp;&nbsp;
            <span><button onClick={lowerCaseTodo}>LowerCase All</button></span>
        </div>
        </>
    )




}
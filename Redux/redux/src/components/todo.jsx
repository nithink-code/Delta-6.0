import { useSelector } from "react-redux";
import AddForm from "./addForm";
import { deleteTodo,markisDone } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo(){
   const todos = useSelector((state)=>state.todos);
   const dispatch = useDispatch();
   console.log(todos);

   let handleDelete = (id)=>{
      dispatch(deleteTodo(id));
   }

   let handleMark = (id) =>{
        dispatch(markisDone(id));
   }
   return (
    <>
      <h2>Todo App!</h2>
      <AddForm/>
      <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine: "line-through",color: "red"}:{}}>{todo.task}</span>&nbsp;&nbsp;
            <button onClick={()=> handleDelete(todo.id)}>Delete</button>&nbsp;&nbsp;
            <button onClick={()=> handleMark(todo.id)}>Mark as Done</button>
            </li>
        ))}
      </ul>
    </>
   );
}
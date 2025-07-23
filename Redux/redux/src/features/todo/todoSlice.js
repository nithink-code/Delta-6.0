import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState ={
    todos: [{id:"abc",task:"demo",isDone:false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        //Add Reducer
        addTodo:(state,action)=>{
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
        // Redux Toolkit allows direct mutations we dont have to deconstructe and send as in React
            state.todos.push(newTodo); // Adding new object to the todos array.
        },
        // Delete Reducer
        deleteTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        // Mark as Done Reducer
        markisDone: (state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
                return todo;
            });
        },
    },
});

export const {addTodo,deleteTodo,markisDone} = todoSlice.actions;
export default todoSlice.reducer;
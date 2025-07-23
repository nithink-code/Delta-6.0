import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice";

// Creating a store
export const store = configureStore({
    reducer : todoReducer,
});
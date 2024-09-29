import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Reducers/TodoSplice';

export default configureStore({
    reducer: {
        todos: todoReducer,
    }
})
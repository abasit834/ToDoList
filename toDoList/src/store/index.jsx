import { CrudSlice } from "./slices/crudSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        toDoList : CrudSlice.reducer,
    }
})

export default store;
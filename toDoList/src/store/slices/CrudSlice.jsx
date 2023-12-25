import { createSlice } from "@reduxjs/toolkit";

const CrudSlice = createSlice({
name : "toDoList",
initialState : [],
reducers : {
addItem(state,action){
state.push(action.payload);
// console.log(action.payload);
},
removeItem(state,action){
    state.splice(action.payload,1);
},
deleteAllItems(state,action){
    console.log("Successfully deleted all....");
    return [];
}
}
});

export {CrudSlice};
export const {addItem,removeItem,deleteAllItems}=CrudSlice.actions;
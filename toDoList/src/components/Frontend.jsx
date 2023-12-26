import React from "react";
import './Frontend.css'
import { useDispatch } from "react-redux";
import { addItem,deleteAllItems } from "../store/slices/CrudSlice";
import DisplayItem from "./DisplayItem";
import Title from "./Title";

const Frontend = () => {
    const dispatch = useDispatch();

    const addToStore=(payload)=>{
        dispatch(addItem(payload));
    }

    const deleteAll=()=>{
        dispatch(deleteAllItems());
    }

    return (
        <div>
    <Title/>        
    <input id="inputText" placeholder="Enter text here" className="input-style" type="text" />
    <br></br>
    <br></br>
    <button className="learn-more"
    onClick={()=>{
        let input= document.getElementById("inputText");
        if(input.value=="")
        alert("Please Input a value");
        else
        {
        addToStore(input.value);
        input.value="";
        }
        }}> Add Items</button>
    <button className="learn-more" onClick={()=>{
        let list=document.getElementById("list");
        if(!list)
        alert("No items to delete");
        else
        deleteAll();
    }
        }>Delete All</button>            
    <ul>
    <DisplayItem/>
    </ul>
    </div>
    
);
}

export default Frontend;

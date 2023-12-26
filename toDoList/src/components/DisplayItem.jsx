import React from "react";
import { useSelector } from "react-redux";
import './DisplayItem.css'
import { useDispatch } from "react-redux";
import { removeItem } from "../store/slices/CrudSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DisplayItem =()=>{

    const data=useSelector((state)=>{
        return state.toDoList;
    })

    const dispatch = useDispatch();

    const deleteOneItem=(payload)=>{
        dispatch(removeItem(payload));
    }
    


return <div> {
    data.map((user,id) =>{
        return <li id="list" key={id}>{user}
        <button className="del-btn"
        onClick={()=>{deleteOneItem(id)}}
        ><FontAwesomeIcon icon={faTrash}  style={{ color: 'red' }} /></button>
        </li>
    })
}

</div>
}


export default DisplayItem;
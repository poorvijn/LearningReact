import { useState, useEffect, useRef } from "react";
import Form from './Form';

function ToDo()
{
    const [list,setList]=useState([]);
    const [strikeList, setStrikeList] = useState([]);
    const inputRef = useRef(null);

    function handleSubmit(item)
    {
        inputRef.current.value="";
        let old = [...list];
        old.push(item);
        localStorage.setItem('tasks',JSON.stringify(old));
        setList(old);
    }

    function handleStrike(item)
    {
        let oldList = [...strikeList];
        if(oldList.length===0)
            oldList.push(item)
        else
        {
            let index = oldList.indexOf(item);
            if(index===-1)
                oldList.push(item)
            else
                oldList.splice(index,1)
        }
        setStrikeList(oldList);
    }

    function handleDelete(item)
    {
        let current = [...list];
        let index = current.indexOf(item);
        console.log(item," ",index);
        let newList=[];
        if(current.length>1)
            current.splice(index,1);
        else
            current=[];
        newList=current;
        localStorage.setItem('tasks',JSON.stringify(newList));
        setList(newList);
    }

    useEffect(()=>{
        let getExistingList = JSON.parse(localStorage.getItem('tasks'));
        setList(getExistingList);
    },[])

    return(
        <div>
            <Form ref={inputRef} handleSubmit={handleSubmit}/><br/>
            {(!list || list.length===0) &&
            <p>No tasks yet</p>}
            {list && list.length>0?
                list.map((item)=>
                <div style={{marginBottom:"20px"}} key={list.indexOf(item)}>
                    <span  style={strikeList && strikeList.indexOf(item)!=-1 ? {textDecoration:'line-through', marginRight:"10px"}:{textDecoration:"none", marginRight:"10px"}}>{item}</span>
                    <button style={{marginRight:"10px"}} onClick={()=>handleDelete(item)}>Delete Task</button>
                    <button onClick={()=>handleStrike(item)}>Strike Through</button>
                </div>):null}
        </div>
    )
}

export default ToDo;
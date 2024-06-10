import { forwardRef } from 'react';

const Form = forwardRef(function Form(props,ref)
{
    let newItem='';
    function handleChange(e)
    {
        newItem = e.target.value;
    }

    return (
        <div>
            <label htmlFor="taskDes">Task: </label>
            <input ref={ref} placeholder="Enter task description" onChange={handleChange}></input>
            <button onClick={()=>props.handleSubmit(newItem)}>Add to List</button>
        </div>
    );
});
export default Form;
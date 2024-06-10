import { useState } from 'react';
import data from './data'
import './styles.css'

function Accordion()
{
    const [selected,setSelected] = useState(null);
    const [multiSelect,setMultiSelect] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function handleSingleSelection(id)
    {
        setSelected((prev) => {
            if(prev==id)
                prev=null;
            else
                prev=id;
            return prev;
        });
    }

    function handleMultipleSelection(id)
    {
        let copy = [...multiple];
        let index = copy.indexOf(id);
        if(index===-1)
            copy.push(id)
        else
            copy.splice(index,1)
        setMultiple(copy);
    }

    return (
    <div className="container">
        <button className='enableBtn' onClick={()=>setMultiSelect(!multiSelect)}>Enable Multi-Select</button>
        <div className='accordion'>
            {data && data.length>0 ? (
              data.map((dataItem) => (
                <>
                    <h3 className='question' key={dataItem.id}>{dataItem.question}</h3>
                    <span  onClick={multiSelect?()=>{handleMultipleSelection(dataItem.id)}:()=>{handleSingleSelection(dataItem.id)}}>+</span>
                    {multiSelect?
                        multiple.indexOf(dataItem.id)!== -1 && <h3 className='answer'>{dataItem.answer}</h3>: selected === dataItem.id ?<h3 className='answer'>{dataItem.answer}</h3>:null}
                </>
              )))
            : <div>No accordion here</div>}
        </div>
    </div>
    );
}

export default Accordion;
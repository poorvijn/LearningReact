import { useState } from 'react';
import './styles.css'

function ColourBox()
{
 const [colour,setColour] = useState("No colour yet");

 function handleColourChange(e)
 {
    setColour(e.target.value!=""?e.target.value:"No colour yet");
 }

 return (
    <div style={{display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center', gap:10}}>
        <input id="textBox" type='textarea' placeholder={colour} style={colour=="No colour yet"?{backgroundColor:'white'}:{backgroundColor:colour}}></input>
        <input type='text' style={{textAlign:'center',height:30, width:100}} placeholder={colour} onChange={handleColourChange}></input>
    </div>
 )
}

export default ColourBox;
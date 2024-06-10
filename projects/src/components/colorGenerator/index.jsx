import { useState } from 'react';
import './styles.css' 

function ColorGenerator()
{
    const hexColorSet=['#FFA07A','#FF6347','#FFD700','#00FF00','#00FFFF'];
    const rgbColorSet=['rgb(255,160,122)','rgb(255,99,71)','rgb(255,215,0)','rgb(0,255,0)','rgb(0,255,255)'];
    const [color,setColor] = useState("#FFA07A");

    function generateRandomHexColor()
    {
        let index = Math.floor(Math.random()*hexColorSet.length);
        setColor(hexColorSet[index]);
    }
    function generateRandomRGBColor()
    {
        let index = Math.floor(Math.random()*rgbColorSet.length);
        setColor(rgbColorSet[index]);
    }

    function generateRandomColor()
    {
        let choose = Math.random();
        console.log(choose);
        if(choose>0.5)
            generateRandomHexColor();
        else
            generateRandomRGBColor();
    }   

    return (
        <div className='container' style={{backgroundColor:color}}>
            <button className='hexBtn' onClick={generateRandomHexColor}>Create Hex Color</button>
            <button className='rgbBtn' onClick={generateRandomRGBColor}>Create RGB Color</button>
            <button className='genBtn' onClick={generateRandomColor}>Generate Random Colour</button>
            <p className='colorCode'>{color}</p>
        </div>
    )
}

export default ColorGenerator;
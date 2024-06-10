import { useState } from "react";

function withCounter(OriginalComponent)
{
    function NewComponent()
    {
        const [count,setCounter] = useState(0);
        return <OriginalComponent count={count} setCounter={setCounter}/>
    }
    return NewComponent;
}

export default withCounter;
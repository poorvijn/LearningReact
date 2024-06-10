import { useEffect, useState } from "react";

function useOnline(time)
{
    const [isOnline, setOnline] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setOnline((prev)=>{!prev});
        },time);
    },[time]);
    return isOnline;
}

export default useOnline;
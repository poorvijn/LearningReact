import {useState, useEffect} from "react";
import axios from 'axios';

function DisplayAPI()
{
    const [data,setData]=useState([]);
    // let d = useRef(null);

    // useEffect(()=>{
    //     console.log("Entered useEffect");
    //     let d = "";
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((response)=>{
    //         // console.log("Got response");
    //         // d.current = response.json();
    //         d = response.json();
    //         // return d.current;
    //         return d;
    //     })
    //     .then((d)=>{
    //         // console.log("Changing state here");
    //         setData(d);
    //         // console.log("State change done");
    //     });
    //     },[])
    
    const callAPI = async(source)=>{
      await axios.get("https://jsonplaceholder.typicode.com/todos", {cancelToken: source.token})
      .then((response)=>{
        setData(response.data);
      })
      .catch(error => {
          console.log(error);
      })
    }

    useEffect(()=>{
        const source = axios.CancelToken.source();
        callAPI(source);
        return ()=>{
          source.cancel();
        }
    },[])
    return<>
      {data.length>0 ? (
        data.map((item)=><div key={item?.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
        </div>)
      ):null}
    </>
}

export default DisplayAPI;
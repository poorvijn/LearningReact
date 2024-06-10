import './App.css'
import {useState} from 'react'

function App() {
// React controls UI updation
// useState is used to propagate variable updation throughout the page. It returns a variable with a 
// default value and a function to update that variable, as array elements. These can be named anything.
let [counter, setCounter] = useState(15);

const addValue = ()=>{
  // counter = counter + 1;
  if(counter+1<=20)
    {
      // React Fiber sends updates in batches, so when all the following operations in the batch do
      // the same work, React processes/executes only one of them.
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)

      // The code below takes the previous state and updates it. This ensures that each update is 
      // executed sequentially, and the state is passed to the next one. This makes the counter update
      // by 4. setCounter accepts a callback, and returns the previous state as input to the callback.
      // setCounter(prevCounter => prevCounter+1)
      // setCounter(prevCounter => prevCounter+1)
      // setCounter(prevCounter => prevCounter+1)
      // setCounter(prevCounter => prevCounter+1)
      setCounter(counter+1);
    }
}

const removeValue = ()=>{
  if(counter-1>=0)
    setCounter(counter-1);
}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <br/>
      <button onClick={addValue}>Add value {counter}</button><br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App

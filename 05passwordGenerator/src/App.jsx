import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [chars, setChars] = useState(false)
  const [password, setPassword] = useState("")
  // useRef(initial value)
  const passwordRef = useRef(null)

  // Because we have to call generatePassword() for multiple scenarios, like when length is changed, or numbers/chars checkbox is clicked, we use useCallback to optimise it, instead of calling it with different parameter values for each scenario. useCallback places the function in cache, helping it in optimisation.
  const generatePassword = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str+="01234567"
    if(chars) str+="{}[]#$@()`"
    
    for(let i=0;i<=length;i++)
      {
        let index = Math.floor(Math.random()*str.length)
        pass+=str[index]
      }
      setPassword(pass)
  },[length,numbers,chars]);

  const copyToClipboard = ()=>{
    // if the current password, referred to by passwordRef is not empty, then select it by hightlighting it.
    passwordRef.current?.select();
    // let passwordInput = document.getElementById('passwordInput');
    // passwordInput?.select(); --> also works, because React uses client-side rendering. Thus, the Javascript here has access to 'document'. This would work in React, but not in NextJS, which uses server-side rendering. It is still recommended to use useRef because 1)useRef is compatible with Virtual DOM. Hence using this method might lead to unexpected errors. 2)In the future React might stop supporting this type of DOM element access.
    window.navigator.clipboard.writeText(password);
  }

  // useEffect does not focus on optimisation. The aim of useEffect is to run the callback whenever any of the dependencies change, or when the page loads for the first time.
  useEffect(()=>{
    generatePassword()
  },[length,numbers,chars,generatePassword]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" id='passwordInput'
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder="Password" readOnly ref={passwordRef}/>
           <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' id='copyBtn'
            onClick={copyToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} className='cursor-pointer' 
            onChange={(e)=>setLength(e.target.value)}
            value={length}/>
            <label>Length({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numbers} id='numberInput'
            onChange={()=>setNumbers(prev => !prev)}/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={chars} id='charInput' 
            onChange={()=>setChars(prev => !prev)}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

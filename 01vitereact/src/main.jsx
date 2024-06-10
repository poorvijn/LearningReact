import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// React converts the JSX inside the component MyApp below to a React element using React.createElement(), and then uses this in the DOM.

// For example, the <h1> below can be converted to:
// React.createElement('h1',{},"This is from MyApp",name) -> name is injected at the end.

// function MyApp()
// {
// const name = 'poorvi';
//   return (
//     <h1>This is from MyApp {name}</h1>
//   )
// }

// const user2 = 'Nayak 2'

// const reactEle2 = React.createElement('a',{href: 'https://www.google.com', target: '_blank'}, "Click me to visit google", user2)

// JSX, eventually converted to a React element using React.createElement() internally
const myH1 = <h1>This is my h1</h1>

ReactDOM.createRoot(document.getElementById('root')).render(
   myH1
)

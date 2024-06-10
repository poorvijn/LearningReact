import './App.css'
import Card from './components/Card'

function App() {
  const username = 'Veda';
  const arr = [1,2,3];
  const obj = {
    office: 'Codezyng',
    location: 'Udupi'
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Time</h1>
      <Card channel='learnReact' name={username} array={arr} object={obj} btnText="Click Me"/>
      <Card name="Poorvi" btnText="Visit Me"/>
    </>
  )
}

export default App

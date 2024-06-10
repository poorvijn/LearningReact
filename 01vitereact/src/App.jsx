import Chai from './Chai'

function App() {
  const username = 'Nayak';
  return (
    <>
    <Chai/>
    {/* Cannot write JS logic within {}, it has to be an 'evaluated expression' */}
    <h1> This is Poorvi {username} </h1>
   </>
  )
}

export default App

import { useState } from 'react'
import Player from "./components/Player"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1></h1>
      <Player song={"Isto é uma música"} />
    </div>
    
  )
}

export default App
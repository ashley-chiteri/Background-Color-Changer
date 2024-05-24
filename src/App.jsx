import { useState } from 'react'
//import './App.css'
import Sidebar from '../components/Sidebar'
import Main from '../components/MainSection'

function App() {

  const [color, setColor] = useState("")

  function handleClick({target}){
    setColor(target.className)
    console.log(color)
  }

  return (
    <div className='container'>
      <Sidebar 
        changeColor = {handleClick}
      />
      <Main 
        color = {color}
      />
    </div>
  )
}

export default App

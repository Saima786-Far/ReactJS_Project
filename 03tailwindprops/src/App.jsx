import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 let myObj = {
  username : "Saima Farheen",
  Age:23
 }
 let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind test </h1>
      <Card />
      <Card  userName = "Saima or Code " btnText= "click me" />
      <Card userName = "Saima Farheen"  btnText= "visit me "/>
    
    </>
  )
}

export default App

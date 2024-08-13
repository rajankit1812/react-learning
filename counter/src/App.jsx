import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //state ko change krne ke liye responsible
  let [counter, setCounter] = useState(5)
  
  //let counter = 5
  
  //problem coming in UI updation as counter is updating as a variable but not in UI as React library allows changes in variables etc but in UI it gives special methods called Hooks -> UI udation controlled by REACT
  const addValue = () => {
    counter = counter + 1
    setCounter((counter <= 20) ? counter : 20)
    // counter = counter + 1
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter((counter > 0) ? counter : 0)
    // counter = counter + 1
  }

  return (
    <>
      <h1>My first Learning</h1>
      <h2>Counter Value: {counter}</h2>


      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}
      </button>
    </>
  )
}

export default App

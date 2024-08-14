import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //state ko change krne ke liye responsible
  let [counter, setCounter] = useState(5)  //usestate patches me updates bhjta hai
  
  //let counter = 5
  
  //problem coming in UI updation as counter is updating as a variable but not in UI as React library allows changes in variables etc but in UI it gives special methods called Hooks -> UI udation controlled by REACT
  const addValue = () => {
    // counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)    //yha hm previous state lerhe hai isliye update krparhe hai nhi to counter+1 krne se update nhi hogi value as patches me jti hai and ab ye callback function aagya to jb ek complete hoga tbhi aage ayga. here as we are taking previous state to ek jan kaam chhodega tbhi dusra krega n isliye ek execute hoga tbhi dusra hoga
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
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

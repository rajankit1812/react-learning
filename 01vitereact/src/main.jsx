import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>Hello guyzz I am Ankit Raj</h1>
  )
}

// const reactElement = {       //react html ke elements ko kaise dekhta hai
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }  //custom render kla code available tha iske liye wha pe pr yha ka render wla code dusra hoga jo ki aage dekhenge

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://www.google.com', target: '_blank'},
//   "Click me to visit Google"
//yesb tree bnjne ke baad variables inject honge
// )


// const anotherElement = (
//   <a href="https://www.google.com" target='_blank'>Visit Google</a>
// )       //ye chlega kyuki ye tag defined hai and ye pta chla basically ye object me convert horha hai

///*iss pure syntax ki hogi parsing jo ki smghaya gya hai custom react app pe*/
createRoot(document.getElementById('root')).render(
    // <MyApp />             
    <App/>
)

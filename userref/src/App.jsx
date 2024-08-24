import { useState } from 'react'

import './App.css'
import User from './user'

import Cpp from './theme'
import Call from './call'
import Focus from './focus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <User/>
     
     <Cpp />

     <Call />
     <Focus />
     
    </>
  )
}

export default App

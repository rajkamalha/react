import React from 'react'
import { useRef } from 'react'
function Focus() {
    const Inputh= useRef(null)
const Focush=()=>{
    if(Inputh.current){
        Inputh.current.focus()
    }
}

  return (
    <div>
        <input type="text" ref={Inputh} />
      <button onClick={Focush} >search</button>
    </div>
  )
}

export default Focus

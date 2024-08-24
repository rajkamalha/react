import React from 'react'
import { useRef } from 'react'

function User() {
    const scrollRef= useRef()
    const handleTopp =()=>{
        if(scrollRef.current){
            scrollRef.current.scrollTo({top: 0,behavior:'smooth'});
        }
    }
  return (
    <div style={{ height: '400px', overflowY: 'scroll' }} ref={scrollRef}>
      <div style={{ height: '2000px' }} >
        <p>Scroll down to see the button...</p>
        <button 
          onClick={handleTopp} 
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            backgroundColor: 'red', 
            padding: '10px',
            zIndex: 1000 ,// Ensure the button stays on top
            borderRadius:50
          }}>
          Scroll to Top
        </button>
      </div>
     </div>
  )
}

export default User
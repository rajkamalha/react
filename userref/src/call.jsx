import React, { useState,useCallback} from 'react'
import Button from './but'
import Counter from './count'
function Call(){
const[count1,setCount1] = useState(0)
const[count2,setCount2] = useState(0)

const handleincrement=useCallback(()=>{
    setCount1(count1+1)
},[count1])
const handledecrement=useCallback(()=>{
  setCount2(count2-1)
},[count2])

  return (
    <div className='sh'>
      <Counter text="counter1" count={count1}/>

       <Button handle={handleincrement}>increment</Button>

       <Counter text="counter2" count={count2}/>

      <Button handle={handledecrement}>decrement</Button>
    </div>
  )
}

export default React.memo(Call)

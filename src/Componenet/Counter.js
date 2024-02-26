import React, { useState } from 'react'
import Mybuttons from './Mybuttons'

function Counter() {
   const [count,setCount]=useState(0);
   
    const plus=()=>{
         setCount(count+1)
         console.log(count);
    }
    const moin=()=>{
       setCount(count-1)
       console.log(count);
    }
    
  return (
    <div style={{marginLeft:"50%" ,display:"flex", gap:"30px"}}>
        <button onClick={plus}>
            +
        </button>
        <span>{count}</span>
        <button onClick={moin}>
            -
        </button>
        <button onClick={()=>setCount(0)}>
            reset
        </button>
    </div>
  )
}

export default Counter
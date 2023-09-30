import React from 'react'
import { useState } from 'react'

function Counter() {
    //DECLARE A STATE VARIABLE 'count' with an initial value of 0
    const [count,setCount]=useState(0);
    //count is the current state and setCount is a function used to update the current state
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        // setCount(count-1)
        //to stop it from giving negative value
        if(count>=1){
        setCount(count-1)
        }
        else{
            setCount(0);
        }
    }
  return (
    <div>
        <div>
            <button onClick={increment}>Increment</button>
            <h1>Count:{count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter
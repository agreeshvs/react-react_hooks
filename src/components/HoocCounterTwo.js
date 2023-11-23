import React, { useState } from 'react'

function HoocCounterTwo() {

    // prevCount => store previous value
    const [count, setCount] = useState(0)
    const incrementCounter = () => {
        // setCount(count + 1)
        setCount( prevCount => prevCount + 1)
    }
    const decrementCounter = () => {
        // setCount(count - 1)
        setCount( prevCount => prevCount - 1)
    }
    const resetCounter = () => {
        setCount(0)
    }
    const incrementByFive = () => {
        for( let i=0; i< 5; i++){
            // setCount( count + 1 )
            setCount( prevCount => prevCount + 1)
        }
    }
  return (
    <>
        <div style={ { 
            padding: '20px', 
            border: '1px solid red', 
            width:'200px', 
            margin:'20px auto'}}>
            <h5>{count}</h5>
        </div>
        <div className='button-div' style={{margin: 'auto'}}>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={incrementByFive}>Increment By 5</button>
        </div>
    </>
  )
}

export default HoocCounterTwo

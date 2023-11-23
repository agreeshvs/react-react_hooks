import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    // Update the document title using useState.
    const [count, setCount] = useState(0)
    // Function in the useEffect called every time the DOM renderd.
    useEffect( () => {
        document.title = `You clicked ${count} times`
    })
  return (
    <div>
        <h2>You have clicked {count} times</h2>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
    </div>
  )
}

export default HookCounterOne

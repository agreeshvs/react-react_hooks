import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    // Update the document title using useState.
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    // Function in the useEffect called every time the DOM renderd.
    useEffect( () => {
        console.log('useEffect - updating the title')
        document.title = `You clicked ${count} times`
    }, [count]) //Conditionally run effects
  return (
    <div>
        <h2>You have clicked {count} times</h2>
        <input type='text' value={name} 
            onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
    </div>
  )
}

export default HookCounterOne

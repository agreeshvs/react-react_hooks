import React, { useEffect, useState } from 'react'

export default function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount+1)
       
    }
    useEffect( () => {
        const interval = setInterval(tick,1000);
        console.log(interval);       
        return () => {
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        {count}
    </div>
  )
}

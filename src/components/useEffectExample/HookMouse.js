import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseEvent = (e) => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect( () => {
        console.log('useEffect call')
        window.addEventListener('mousemove', logMouseEvent)

        return () => {
            console.log('Component unmounting');
            window.removeEventListener('mousemove', logMouseEvent)
        }
    },[])
  return (
    <div>
       X : {x} - Y : {y}
    </div>
  )
}

export default HookMouse

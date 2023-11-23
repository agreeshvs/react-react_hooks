import React, { useState } from 'react'

function HookCounterThree() {
  // useState with Object
    const [name,setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <div>
            <h2>
                Your First name is - {name.firstName}
            </h2>
            <h2>
                Your Last name is - {name.lastName}
            </h2>
        </div>
      <form>
        <input type='text' value={name.firstName}
            onChange={ (e) => setName({...name ,firstName : e.target.value})}/>
        <input type='text' value={name.lastName}
            onChange={ (e) => setName({...name,lastName : e.target.value})}/>

      </form>
    </div>
  )
}

export default HookCounterThree

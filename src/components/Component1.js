import React from 'react'
import { useState } from 'react'
import Component2 from './Component2'

export const Component1 = () => {

    const [user, setUser] = useState({id: "11", name: "Badsha"})

  return (
    <div>
        <Component2  user={user}/>
    </div>
  )
}

export default Component1
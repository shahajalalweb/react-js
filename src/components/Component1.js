import React from 'react'
import { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './useContext'

export const Component1 = () => {

    const [user, setUser] = useState({id: "22", name: "Shahajalal Badsha"});
    const [text, setText] = useState("PropDilling successfull");

  return (
    <UserContext.Provider value={{user, text}}>
        <Component2/>
    </UserContext.Provider>
  )
}

export default Component1
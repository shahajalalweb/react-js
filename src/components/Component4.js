import React, {useContext} from 'react'
import { UserContext } from './useContext'


export const Component4 = () => {
  
  const {user, text} = useContext(UserContext);


  return (
    <div>
        <h2>{user.id}</h2>
        <h3>{user.name}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Component4

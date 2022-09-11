import React, {useState} from 'react'
import { user } from './user';


export const Home = () => {

  const [user, setUser] = useState({});

  return (
    <div>
      <user user={user}/>
    </div>
  )
}


export default Home
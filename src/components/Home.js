import React, {useState} from 'react'
import {User} from "./User"


export const Home = () => {

  const [userName, setUserName] = useState("Shahajalal Badsha");
  const [userID, setUserID] = useState("191");

  return (
    <div>
      <User userName={userName} userID={userID} />
    </div>
  );
}


export default Home
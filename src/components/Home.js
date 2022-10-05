import React, { useState, useCallback } from 'react'

import style from "../style/home.module.css"
import Massege  from './Massege';


const Home = () => {

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);


  console.log("Home page rendaring")

  const inCremMsg = useCallback(
    () => {
      setCount(count + 1);
    },
    [count],
  )

  return (
    <div className={style.container}> 
      <div className={style.counter}>
        {toggle ? "Off" : "On"} 
        {<br></br>}
        <button onClick={() => {setToggle(!toggle)}}> On off button </button>

        <p className={style.count}>Count : {count}</p>
        <div className={style.btn}>
          <button onClick={() => {setCount(count - 1);}} disabled={count === 0}>-</button>
          <button onClick={() => {setCount(count + 1);}}>+</button>
        </div>

        <Massege  massegeOfnumber={count} onHandleIn={inCremMsg}/>

      </div>
    </div>
  )
}

export default Home
import React, { useState, useCallback, useMemo } from 'react'

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

   const numberCount = useMemo(
      () => {
        let number = 0 ;
      for (let index = 0; index < 5000000000; index++) {
      number++
  }
  return number;
 }, [])

  


  return (
    <div className={style.container}> 
      <div className={style.counter}>
        {toggle ? "Off" : "On"} 
        {<br></br>}
        <button onClick={() => {setToggle(!toggle)}}> On off button </button>

        <p className={style.count}>Count : {count}</p>

        <h2>{numberCount}</h2>

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
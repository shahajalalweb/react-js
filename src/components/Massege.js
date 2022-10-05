import React, {memo} from 'react'

const Massege = ({massegeOfnumber, onHandleIn}) => {
    console.log('Massage rendaring');
  return (
    <div>
        <p>Send {massegeOfnumber} massege</p>
        <button onClick={onHandleIn}>Massege Count</button> 
    </div>
  )
}

export default memo(Massege)
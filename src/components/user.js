import React from 'react'
import PropTypes from 'prop-types'

export const User = (props) => {

  return (
    <>
      <h2>{props.userName}</h2>
      <h1>{props.userID}</h1>
    </>
  )
}

User.propTypes = {
  userID: PropTypes.string,
  userName: PropTypes.number,
}
      //Proptypes Object 
// User.propTypes = {
//   user: PropTypes.shape ({
//     userID: PropTypes.string,
//     userName: PropTypes.number,
//   }), 
// }

     //Default proptypes
  //    User.defaultProps = {
  //     userID: "00",
  //     userName: "Badsha Vai",
  // };
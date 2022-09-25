import React, {useState, useEffect} from "react"
// import style from "../style/home.module.css"

const URL = "https://rest-api-without-db.herokuapp.com/users/"

const App = () => {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllUsers = () => {
    fetch(URL)
    .then((res) => {
      if(!res.ok) {
       throw Error("could not fetch"); 
      }
      return res.json();
    })

    .then((data) => {
      setUsers(data.users);
    })

    .catch((err) => {
      setError(err.message);
    })

    .finally(() => {
      setIsLoading(false);
    })

  }

  useEffect(() => {
    getAllUsers();
  }, [])




  return (
    <div> 
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {console.log(users)} 
      {users &&
          users.map((user) => {
            const { id, username, email } = user;
            return (
              <article key={id}>
                <p>{username}</p>
                <p>{email}</p>

              </article>
            );
          })}
      
      
    </div>
  )
}

export default App 
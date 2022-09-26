import React, {useState, useEffect} from "react"
import './App.css';


const URL = "https://rest-api-without-db.herokuapp.com/users/"







function App() {

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


  const handleDelete = (id) => {
    fetch(URL + `/${id}`, {
      method : 'DELETE'
    })
    .then((res) => {
      if(!res.ok) {
       throw Error("could not DLETE"); 
      }
      getAllUsers();
    })

    .catch((err) => {
      setError(err.message);
    })

  }

  useEffect(() => {
    getAllUsers();
  }, [])





  return (
    <div className="App">
      <h1 className='h1'>Normal Counter</h1>
      <div> 
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <section>
        {users &&
            users.map((user) => {
              const { id, username, email } = user;
              return (
                <article key={id} className="card">
                  <p>{username}</p>
                  <p>{email}</p>
                  <button className="btn">Update</button>
                  <button className="btn" onClick={() => {handleDelete(id)}}>Delete</button>
                </article>
              );
        })}
      </section>
      
      
    </div>
    </div>
  );
}

export default App;
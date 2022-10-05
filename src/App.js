import React, {useState, useEffect} from "react"
import './App.css';
import UserForm from "./components/UserForm";

const URL = "https://rest-api-without-db.herokuapp.com/users/"

function App() {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // update 
  const [selectedUser, setSelectedUser] = useState({
    username: '',
    email: ''
  });
  const [updateFlag, setUpdateFlag] = useState(false);
  const [selectedId, setSelectedId] = useState('');

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

  const addUser = (user) => {
    fetch(URL, {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((res) => {
      if(res.status === 201) {
        getAllUsers();
      }else {
        throw Error("could not created new user"); 
      }
    })

    .catch((err) => {
      setError(err.message);
    })
  }

  const handleEdite = (id) => {
    setSelectedId(id);
    setUpdateFlag(true);
    const filteredData = users.filter((user) => user.id === id);
    setSelectedUser({
      username: filteredData[0].username,
      email: filteredData[0].email,
    })
    
  }

  const handleUpdate = (user) => {
    fetch(URL + `/${selectedId}`, {
      method: "PUT", 
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("faild to update");
      }
      getAllUsers();
      setUpdateFlag(false);
    })

    .catch((err) => {
      setError(err.message);
    })
  }

  return (
    <div className="App">
      <h1 className='h1'>CRUD oparation</h1>
      <div> 
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {
        updateFlag ? (
          <UserForm btnText="Update" selectedUser={selectedUser} handleSubmitData={handleUpdate}/>
        ):(
          <UserForm btnText="Add User" handleSubmitData={addUser}/>
        )
      }

      <section>
        {users &&
            users.map((user) => {
              const { id, username, email } = user;
              return (  
                <article key={id} className="card">
                  <p>{username}</p>
                  <p>{email}</p>
                  <button 
                    className="btn" 
                    onClick={() => {handleEdite(id)}} >Update</button>
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
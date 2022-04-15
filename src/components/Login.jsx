import React, { useState, useRef } from "react";

function Login() {
  const [username, setUsername] = useState({ name: "" });
  const [users, setUsers] = useState([]);

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.value = "";
  };

  function handleChanges(e) {
    setUsername({
      ...username,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newUsername = {
      id: Date.now(),
      name: username.name,
    };
    setUsers([...users, newUsername]);
    setUsername({
      ...username,
      name: "",
    });
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Login:</label>
        <input
          ref={inputElement}
          type="text"
          name="name"
          onChange={handleChanges}
          value={username.name}
        />
        <button onClick={focusInput}>Login</button>
      </form>
      {users &&
        users.map((item) => {
          console.log(item);
          return (
            <div className="card" key={item.id}>
              <p>Name: {item.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Login;

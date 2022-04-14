import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  function handleChanges(e) {
    console.log(e.target.name, e.target.value);
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(username);
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Login:</label>
        <input
          type="text"
          name="username"
          onChange={handleChanges}
          value={username}
        />
        <button>Login</button>
      </form>
      {username}
    </div>
  );
}

export default Login;

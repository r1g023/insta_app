import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button>Add User</button>
      </form>
      <p>State: {username}</p>
    </div>
  );
}

export default Login;

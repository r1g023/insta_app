import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="login"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

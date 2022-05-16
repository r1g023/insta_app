import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
    setUsername("");
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

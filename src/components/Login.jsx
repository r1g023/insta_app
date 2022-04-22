import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState({ name: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username.name);
    setUsername({ ...username, name: "" });
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={username.name}
          onChange={(e) =>
            setUsername({ ...username, [e.target.name]: e.target.value })
          }
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

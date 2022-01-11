import React, { useState, useRef } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");

  const handleChanges = (e) => {
    console.log(e.target.name, ": ", e.target.value);
    setUsername(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChanges}
          value={username}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

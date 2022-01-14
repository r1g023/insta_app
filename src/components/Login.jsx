import React, { useState, useRef } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState({ me: "" });

  const handleChanges = (e) => {
    console.log(e.target.name, ": ", e.target.value);
    setUsername({ ...username, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ ...username, rigo: username.me });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="me"
          onChange={handleChanges}
          value={username.me}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

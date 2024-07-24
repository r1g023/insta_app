import React from "react";

function Login({  setUser }) {
    const [username, setUsername] = React.useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          id="login"
          value={username}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

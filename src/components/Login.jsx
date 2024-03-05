import React from "react";

function Login({ setUser }) {
  const [username, setUsername] = React.useState("");

  function handleLogin(e) {
    e.preventDefault();
    console.log("Logged in");
    setUser(username);
  }

  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button>Login user</button>
      </form>
      <p>Username: {username}</p>
    </div>
  );
}

export default Login;

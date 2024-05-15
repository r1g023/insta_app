import React from "react";

function Login({ user, setUser }) {
  const [username, setUsername] = React.useState("");

  return (
    <div style={{ border: "2px solid red", padding: "100px" }}>
      Login
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUser(username);
        }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Add user</button>
      </form>
    </div>
  );
}

export default Login;

import React from "react";

function Login({ setUser }) {
  const [username, setUsername] = React.useState("");

  function handleSubmit(e) {
    console.log("inside handleSubmit");
    e.preventDefault();
    setUser(username);
  }

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;

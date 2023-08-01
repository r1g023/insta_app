import React from "react";

function Login({ setUser }) {
  const [username, setUsername] = React.useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("login form submitted");
    setUser(username);
  };

  function handleChange(e) {
    console.log(e.target.value);
    setUsername(e.target.value);
  }

  return (
    <div>
      <h1>Login</h1>
      <form type={handleLoginSubmit}>
        Login
        <input
          type="text"
          id="username"
          onChange={handleChange}
          placeholder="username"
        />
        <button onClick={handleLoginSubmit}>Login</button>
      </form>
    </div>
  );
}
export default Login;

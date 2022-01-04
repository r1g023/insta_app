import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const baseUrl = `https://api.github.com/users/`;

function App() {
  const [username, setUsername] = useState({
    users: [],
    githubname: "",
    error: "",
  });

  console.log("username--->", username.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername({
      ...username,
    });

    axios
      .get(`${baseUrl}${username.githubname}`)
      .then((response) => {
        console.log("responsedata----->", response.data);
        setUsername({
          ...username,
          users: response.data,
          errors: "",
        });
      })
      .catch((err) => {
        console.log("error axios", err);
        setUsername({
          ...username,
          errors: `user of ${username.githubname} not found`,
        });
      });
  };

  function handleChanges(e) {
    console.log(e.target.name, ":", e.target.value);
    setUsername({
      ...username,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="githubname"></label>
        <input
          type="text"
          placeholder="find user"
          id="githubname"
          name="githubname"
          onChange={handleChanges}
          value={username.githubname}
        />
        <button>Search User</button>
      </form>
      {username.errors && <p className="error">Error: {username.errors}</p>}

      <div className="one">
        <p>tests</p>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

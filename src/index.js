import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const baseUrl = `https://api.github.com/users/`;

function App() {
  const [username, setUsername] = useState({
    users: null,
    githubname: "",
    errors: "",
  });

  function handleChanges(e) {
    console.log(e.target.name, ":", e.target.value);
    setUsername({
      ...username,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsername({
      ...username,
    });
    axios
      .get(`${baseUrl}${username.githubname}`)
      .then((response) => {
        console.log("response data---->", response.data);
        setUsername({
          ...username,
          users: response.data,
          errors: "",
        });
      })
      .catch((err) => {
        console.log("error fetching data");
        setUsername({
          ...username,
          errors: `user ${username.githubname} is not in the database`,
        });
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="githubname" onChange={handleChanges} />
        <button>Find user</button>
      </form>
      githubname: {username.githubname}
      <div className="card">
        {username.users && !username.errors ? (
          <div className="cardtwo">
            <p>githuname: {username.users.login}</p>
            <img
              src={username.users.avatar_url}
              alt="gituser"
              style={{ width: "100px" }}
            />
          </div>
        ) : (
          <h2>{username.errors && <p>{username.errors}</p>}</h2>
        )}
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

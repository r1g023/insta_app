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

  const [name, setName] = useState("mario");
  const [number, setNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(1);

  useEffect(() => {
    console.log("useeffect----->");
    setNumber(number + 5);
    console.log("name--useEffect->", name);
  }, [name, secondNumber]);

  function handleChanges(e) {
    console.log(e.target.name, ":", e.target.value);
    setUsername({
      ...username,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    console.log("handle submit button--->");

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

          errors: `${username.githubname}user is not in the database`,
        });
      });
  }
  console.log("component did mount");
  return (
    <div>
      {console.log("component did render")}
      <input
        type="text"
        name="githubname"
        onChange={handleChanges}
        value={username.githubname}
      />
      <button onClick={handleSubmit}>Find user</button>
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
      <button onClick={() => setName("luigi")}>CHANGE NAME</button>
      <p>name: {name}</p>
      <p>
        {" "}
        {number}-{secondNumber}{" "}
      </p>
      <button onClick={() => setSecondNumber(secondNumber + 1)}>
        Increment second
      </button>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

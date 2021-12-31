import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const baseUrl = `https://api.github.com/users/`;

function App() {
  const [user, setUser] = useState({ users: "rigo0523", errors: "" });

  // function getUsers() {
  //   axios
  //     .get(`${baseUrl}${user.users}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setUser({
  //         ...user,
  //         users: response.data,
  //         errors: "",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("error cant fetch user", err);
  //       setUser({
  //         ...user,
  //         errors: `404 error, can't find user of ${user.users}`,
  //       });
  //     });
  // }

  function handleInput(e) {
    console.log(e.target.value);
    setUser({
      ...user,
      users: e.target.value,
    });
    axios
      .get(`${baseUrl}${user.users}`)
      .then((response) => {
        console.log(response.data);
        setUser({
          ...user,
          users: response.data,
          errors: "",
        });
      })
      .catch((err) => {
        console.log("error cant fetch user", err);
        setUser({
          ...user,
          errors: `404 error, can't find user of ${user.users}`,
        });
      });
  }

  // useEffect(() => {
  //   console.log("use effect hook");
  //   getUsers();
  // }, []);

  console.log("component did mount");
  return (
    <div>
      <input type="text" placeholder="find user" onChange={handleInput} />

      <button>Search user</button>
      <button>Clearn input</button>
      {user.errors && (
        <p style={{ color: "white", background: "red" }}>
          Error: {user.errors}
        </p>
      )}
      {!user.errors && user ? (
        <div>
          <h1>username: {user.users.login}</h1>
          <img
            src={user.users.avatar_url}
            alt="git"
            style={{ height: "100px" }}
          />
        </div>
      ) : (
        <h1>Error Loading...</h1>
      )}
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

// function Test() {
//   console.log("component did mount TEST");

//   return (
//     <div className="one">
//       <h1>test</h1>
//     </div>
//   );
// }

// setTimeout(() => ReactDOM.render(<Test />, root), 2000);

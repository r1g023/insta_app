import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const baseUrl = `https://api.github.com/users/`;

function App() {
  const [username, setUsername] = useState("rigo0523");
  const [user, setUser] = useState(null);
  console.log(user);

  function getUser() {
    axios
      .get(`${baseUrl}${username}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log("use effect render");
    getUser();
  }, []);

  return (
    <div>
      {console.log("component did mount")}
      <h1>TEST</h1>
      {user ? (
        <div>
          <h1>Name: {user.login}</h1>
          <img src={user.avatar_url} alt="userphoto" />
        </div>
      ) : (
        <h1>Loading ......</h1>
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

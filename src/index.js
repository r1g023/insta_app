import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./App";
=======
import axios from "axios";
const baseUrl = `https://api.github.com/users/`;

function App() {
  const [user, setUser] = useState({
    githubUser: null,
    username: "github",
    errors: "",
  });

  const userFocus = useRef();

  //useffect
  useEffect(() => {
    console.log("useeffect did ran--->");
    getUser();
  }, []);

  function getUser() {
    axios
      .get(`${baseUrl}${user.username}`)
      .then((response) => {
        console.log(response.data);
        setUser({
          ...user,
          githubUser: response.data,
          errors: "",
        });
      })
      .catch((err) => {
        console.log("error--->", err);
        setUser({
          ...user,
          errors: `user ${user.username} not found`,
        });
      });
  }

  function clearInput() {
    userFocus.current.value = "";
    userFocus.current.focus();
  }

  return (
    <div>
      {console.log("component did render----")}
      <input
        type="text"
        placeholder="input username"
        name="username"
        ref={userFocus}
        onChange={(e) => {
          console.log(e.target.name, ": ", e.target.value);
          setUser({
            ...user,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <button onClick={getUser}>Search User</button>
      <button onClick={clearInput}>Clear Input</button>
      {user.githubUser && !user.errors ? (
        <>
          <h2>{user.githubUser.login}</h2>
          <img
            src={user.githubUser.avatar_url}
            alt="githubimage"
            width="50px"
          />
          <h2>id: {user.githubUser.id}</h2>
        </>
      ) : (
        <h2>{user.errors && <p>error: {user.errors}</p>}</h2>
      )}
    </div>
  );
}
>>>>>>> 024effce3b189a9d18e48c4e091d89ca65174fcf

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

// import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// const baseUrl = `https://api.github.com/users/`;

// function App() {
//   const [username, setUsername] = useState({
//     users: null,
//     githubname: "",
//     errors: "",
//   });

//   const [name, setName] = useState("mario");
//   const [number, setNumber] = useState(0);
//   const [secondNumber, setSecondNumber] = useState(1);

//   useEffect(() => {
//     console.log("useeffect----->");
//     // setNumber(number + 5);
//     console.log("name--useEffect->", name);
//     handleSubmit();
//   }, [username.errors]);

//   function handleChanges(e) {
//     console.log(e.target.name, ":", e.target.value);
//     setUsername({
//       ...username,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleSubmit(e) {
//     console.log("handle submit button--->");

//     axios
//       .get(`${baseUrl}${username.githubname}`)
//       .then((response) => {
//         console.log("response data---->", response.data);
//         setUsername({
//           ...username,
//           users: response.data,
//           errors: "",
//         });
//       })
//       .catch((err) => {
//         console.log("error fetching data");
//         setUsername({
//           ...username,

//           errors: `${username.githubname}user is not in the database`,
//         });
//       });
//   }
//   console.log("component did mount");
//   return (
//     <div>
//       {console.log("component did render")}
//       <input
//         type="text"
//         name="githubname"
//         onChange={handleChanges}
//         value={username.githubname}
//       />
//       <button onClick={handleSubmit}>Find user</button>
//       githubname: {username.githubname}
//       <div className="card">
//         {username.users && !username.errors ? (
//           <div className="cardtwo">
//             <p>githuname: {username.users.login}</p>
//             <img
//               src={username.users.avatar_url}
//               alt="gituser"
//               style={{ width: "100px" }}
//             />
//           </div>
//         ) : (
//           <h2>{username.errors && <p>{username.errors}</p>}</h2>
//         )}
//       </div>
//       <button onClick={() => setName("luigi")}>CHANGE NAME</button>
//       <p>name: {name}</p>
//       <p>
//         {" "}
//         {number}-{secondNumber}{" "}
//       </p>
//       <button onClick={() => setSecondNumber(secondNumber + 1)}>
//         Increment second
//       </button>
//     </div>
//   );
// }

// const root = document.getElementById("root");
// ReactDOM.render(<App />, root);

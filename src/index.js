import ReactDom from "react-dom";
import React from "react";

const baseUrl = "https://api.github.com/users";

function App() {
  const [username, setUsername] = React.useState("r1g023");
  const [user, setUser] = React.useState(null);
  const clearInput = React.useRef();
  const [userError, setUserError] = React.useState(null);

  function getUser() {
    fetch(`${baseUrl}/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log("error---->", error.message);
        setUserError(error);
      });
  }

  React.useEffect(() => {
    console.log("useEffect");
    getUser();
  }, []);

  console.log("user outside", user);

  return (
    <div style={{ padding: "100px" }}>
      {console.log("render")}
      {console.log("user inside", user)}
      <h1>Find git user</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUser();
        }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={clearInput}
        />
        <button>Find User</button>
      </form>
      <button
        onClick={() => {
          clearInput.current.value = "";
          setUser(null);
        }}>
        Clear input
      </button>
      {user && !user.message ? (
        <div>
          <p>User: {user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Bio: {user.bio} </p>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ height: "100px" }}
          />
          {userError && <p style={{ color: "red" }}>User not found</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {user && user.message && (
        <p style={{ color: "red" }}>
          {user.login} {user.message}
        </p>
      )}
      <p>Username: {username} </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

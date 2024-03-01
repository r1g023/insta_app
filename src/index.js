import ReactDom from "react-dom";
import React from "react";

const baseUrl = "https://api.github.com/users";

function App() {
  const [username, setUsernames] = React.useState("r1g023");
  const [users, setUsers] = React.useState(null);
  const inputRef = React.useRef(null);

  function fetchUser() {
    fetch(`${baseUrl}/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }

  React.useEffect(() => {
    console.log("useEffect");
    fetchUser();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      {console.log("render")}
      <form
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          fetchUser();
        }}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter username"
          onChange={(e) => {
            setUsernames(e.target.value);
          }}
        />
        <button>Search User</button>
        <button
          type="button"
          onClick={() => {
            inputRef.current.value = "";
          }}>
          Clear
        </button>
      </form>
      {users && (
        <div>
          <h1>{users.login}</h1>
          <img src={users.avatar_url} alt="user" style={{ height: "100px" }} />
          <p>{users.bio}</p>
        </div>
      )}
      Username: {username}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

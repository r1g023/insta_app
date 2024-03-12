import React from "react";

const baseUrl = "https://api.github.com/users/";

function Github() {
  const [username, setUsername] = React.useState("r1g023");
  const [gitUser, setGitUser] = React.useState(null);
  const clearUser = React.useRef();

  React.useEffect(() => {
    fetchUser();
  }, []);

  function clearTheUser() {
    clearUser.current.value = "";
  }

  function fetchUser(e) {
    fetch(`${baseUrl}${username}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGitUser(data);
      });
  }

  return (
    <div>
      <h1>Github</h1>
      <p>Some github stuff</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchUser();
          setUsername("");
        }}>
        <input
          type="text"
          placeholder="Github username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          ref={clearUser}
        />
        <button>Submit</button>
      </form>
      <button onClick={clearTheUser}>Clear user</button>
      <div
        style={{
          width: "100%",
          background: "gray",
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          flexWrap: "wrap",
        }}>
        {gitUser && (
          <div style={{ border: "1px solid red", width: "200px" }}>
            <h2>User: {gitUser.login}</h2>
            <h1>
              Bio:
              {gitUser.bio}
            </h1>
            <h1>Followers: {gitUser.followers}</h1>
            <img src={gitUser.avatar_url} alt="avatar" height="100px" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Github;

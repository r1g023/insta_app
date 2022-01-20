import React from "react";

function Header({ user, setUser, setToggle }) {
  return (
    <div>
      <p>Welcome, {user}!</p>

      <button onClick={() => setUser()}>Log out</button>
      <button
        style={{ marginLeft: "100px", background: "skyblue" }}
        onClick={() => setToggle()}
      >
        Handle Toggle Modal
      </button>
    </div>
  );
}

export default Header;

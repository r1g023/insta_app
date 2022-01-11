import React from "react";

function Header({ user, logOut }) {
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Header;

import React from "react";

function Header({ user, setUser }) {
  console.log("outside Header");
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
}

export default Header;

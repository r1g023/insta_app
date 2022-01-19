import React from "react";

function Header({ user, setUser }) {
  return (
    <div>
      <p>Welcome back, {user}!</p>
      <button onClick={() => setUser("")}>Log out</button>
    </div>
  );
}

export default Header;

import React from "react";
import Logout from "./Logout";

function Header({ user, setUser }) {
  return (
    <div style={{ border: "2px solid red" }}>
      <p>Welcome, {user}!</p>
      <Logout setUser={setUser} />
    </div>
  );
}

export default Header;

import React from "react";

function Header({ user, setUser }) {
  return (
    <div style={{ border: "2px dashed green", padding: "10px" }}>
      <p>Header</p>
      <p>Welcome {user}!</p>
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
}

export default Header;

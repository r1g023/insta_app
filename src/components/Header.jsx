import React from "react";

function Header({ user, signOut }) {
  return (
    <div className="header">
      <h1>Header</h1>
      <p>Welcome {user}!</p>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}

export default Header;

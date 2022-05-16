import React, { useContext } from "react";
import { UserContext } from "../App";

function Header() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="header">
      <h1>Header</h1>
      <p>Welcome {user}!</p>
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
}

export default Header;

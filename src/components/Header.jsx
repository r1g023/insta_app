import React, { useContext } from "react";
import { UserContext } from "../App";

function Header({ signOut }) {
  const { user } = useContext(UserContext);
  console.log("user--->", user);
  return (
    <div className="header">
      <h1>Header</h1>
      <p>Welcome {user}!</p>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}

export default Header;

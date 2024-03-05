import React from "react";

function Logout({ setUser }) {
  function handleLogout() {
    console.log("Logged out");
    setUser("");
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

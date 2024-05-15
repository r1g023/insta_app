import React from "react";

function Header({ setUser, postList }) {
  return (
    <div style={{ border: "4px solid green", padding: "100px" }}>
      Header
      <button
        onClick={() => {
          setUser(null);
        }}>
        Signout
      </button>
    </div>
  );
}

export default Header;

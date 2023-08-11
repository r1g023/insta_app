import React from "react";

function Logout({ setUser }) {
  return (
    <div>
      <button
        onClick={() => {
          setUser("");
        }}>
        Logout
      </button>
    </div>
  );
}
export default Logout;

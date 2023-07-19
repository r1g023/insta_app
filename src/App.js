import React, { useState } from "react";

function App() {
  function handleClick(person) {
    alert("Hello, " + person);
  }

  const people = ["Sara", "Cahal", "Edite"];

  return (
    <div>
      {people.map((person, index) => (
        <button
          onClick={() => {
            handleClick(person);
          }}>
          Click my name
        </button>
      ))}
    </div>
  );
}
export default App;

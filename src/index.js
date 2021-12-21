import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    console.log("mouse moved");
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      console.log("remove mouse even listener");
    };
  }, []);

  function handleMouseMove(e) {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }

  return (
    <div>
      {console.log("component did mount")}
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, root);

function Test() {
  console.log("component did mount TEST");

  return (
    <div className="one">
      <h1>test</h1>
    </div>
  );
}

setTimeout(() => ReactDOM.render(<Test />, root), 2000);

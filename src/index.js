import ReactDom from "react-dom";
import React from "react";

function App() {
  const [dev, setDev] = React.useState({
    language: "python",
    yearsExperience: 3,
    developer: true,
  });

  return (
    <div>
      <button
        onClick={() => {
          setDev({
            ...dev,
            language: "javascript",
          });
        }}>
        Change
      </button>
      <input
        type="number"
        name="yearsExperience"
        onChange={(e) => {
          console.log(e.target.value);

          setDev({
            ...dev,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <h1>Language: {dev.language}</h1>
      <h1>Years of Experience: {dev.yearsExperience}</h1>

      <button
        onClick={() => {
          setDev({
            ...dev,
            developer: !dev.developer,
          });
        }}>
        Is Dev?
      </button>
      <h1>Developer: {dev.developer ? "Yes" : "No"}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

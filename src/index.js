import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

function App() {
  const [developer, setDeveloper] = React.useState({
    language: "python",
    years: "",
    isEmployed: false,
    name: "",
    title: "",
  });

  //effect callback, conditioanlly run this function only when title is changed so
  //it only runs once when the app rerenders on state change
  React.useEffect(() => {
    //affect function
    document.title = developer.title;
    console.log("runs effect");
  }, [developer.title]);

  const handleChanges = (e) => {
    setDeveloper({
      ...developer,
      language: "javascript",
    });
  };

  const handleInput = (e) => {
    console.log("e--->", e.target.name, ": ", e.target.value);
    setDeveloper({
      ...developer,
      [e.target.name]: e.target.value,
    });
  };

  const employ = (e) => {
    setDeveloper((prev) => {
      return {
        ...prev,
        isEmployed: !prev.isEmployed,
      };
    });
  };

  return (
    <div>
      {console.log("component did mount")}
      <h3>test</h3>
      <button onClick={handleChanges}>Change Language</button>
      <label htmlFor="years">
        Years:{" "}
        <input
          type="number"
          name="years"
          onChange={handleInput}
          value={developer.years}
        />
      </label>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleInput}
          value={developer.name}
        />
      </label>

      <label htmlFor="title">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInput}
          value={developer.title}
        />
      </label>

      <button onClick={employ}>EMPLOYED</button>
      <div className="one">
        <p>Change language: {developer.language}</p>
        <p>Change years: {developer.years}</p>
        <p>Name input: {developer.name} </p>
        <p>employment: {developer.isEmployed ? "employed" : "not Employed"}</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, root);

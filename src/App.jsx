import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    window.document.title = `Welcome, ${user}`;
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <Header user={user} setUser={setUser} />
    </div>
  );
}

export default App;

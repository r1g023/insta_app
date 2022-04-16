import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState("");
  if (!user) return <Login setUser={setUser} />;
  return (
    <div className="App">
      <Header user={user} signOut={() => setUser("")} />
    </div>
  );
}

export default App;

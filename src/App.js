import React, { useState, useEffect, createContext } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    document.title = user ? `welcome ${user}` : "Please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <Header />

        <CreatePost user={user} />

        <div className="post-wrapper">{/* <PostList /> */}</div>
      </div>
    </UserContext.Provider>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState({ rigo: "" });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect--- running--->");
    document.title = user.rigo ? `${user.rigo}'s feed` : "please log in";
  }, [user.rigo]);

  if (!user.rigo) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="App">
      <Header
        user={user.rigo}
        logOut={() => {
          setUser({
            ...user,
            rigo: "",
          });
        }}
      />
      <CreatePost user={user.rigo} posts={posts} setPosts={setPosts} />
      <>
        {posts.map((item) => {
          console.log("item--->", item);
          return (
            <div className="card" key={item.id}>
              <p>ID: {item.id}</p>
              <p>User: {item.user} </p>
              <p>Content: {item.content}</p>
              <img src={URL.createObjectURL(item.image)} alt="somephoto" />
            </div>
          );
        })}
      </>
    </div>
  );
}

export default App;

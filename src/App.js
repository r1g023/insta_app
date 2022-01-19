import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  console.log("user--->", user, "posts--->", posts);

  useEffect(() => {
    console.log("component did run useEffect---->");
    setTimeout(() => {
      console.log("component did run useEffect SECOND TIME---->");
      document.title = user ? `welcome ${user}` : `please log in`;
    }, 3000);
  }, []);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="App">
      {console.log("component did mount")}
      <p>App</p>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} posts={posts} />
      <>
        {posts.map((item) => {
          console.log("item--->", item);
          return (
            <div className="card" key={item.id}>
              <p>Content: {item.content}</p>
              <p>User: {item.user}</p>

              {item.image && (
                <img
                  src={URL.createObjectURL(item.image)}
                  alt="somephoto"
                  height="50"
                />
              )}
            </div>
          );
        })}
      </>
    </div>
  );
}

export default App;

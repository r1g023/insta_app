import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState("");
  console.log("user--->", user);
  const [posts, setPosts] = useState([
    { id: 1, content: "test post", user: user, image: null },
  ]);

  console.log("posts before-->", posts);

  useEffect(() => {
    console.log("useEffect did run ---->");
    document.title = user ? `welcome ${user}` : "please login";
  }, [user]);

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
          console.log("item---->", item);
          return (
            <div className="card" key={item.id}>
              <p>content: {item.content}</p>
              <p>User: {item.user}</p>
              <p>Image: {posts.image}</p>
              {item.image && (
                <img
                  src={URL.createObjectURL(item.image)}
                  alt="somephot"
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

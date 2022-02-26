import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `Welcome ${user}` : "please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      App
      <Header user={user} signOut={setUser} />
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      <>
        {posts.map((item) => (
          <div className="post" key={item.id}>
            {console.log("item---->", item)}
            <p>Content: {item.content}</p>
            <p>User: {item.user}</p>
            {item.image && (
              <img
                src={URL.createObjectURL(item.image)}
                alt="post"
                height="50"
              />
            )}
          </div>
        ))}
      </>
    </div>
  );
}

export default App;

//function to add two numbers to the
//set up vs code WSL LINUX tests

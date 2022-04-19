import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `welcome ${user}` : "Please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;
  return (
    <div className="App">
      <Header user={user} signOut={() => setUser("")} />
      <CreatePost setPosts={setPosts} posts={posts} user={user} />
      <>
        {posts.map((item) => (
          <div className="postCard" key={item.id}>
            <p>User: {item.user}</p>
            <p>Content: {item.content}</p>
            <img
              src={URL.createObjectURL(item.image)}
              alt="randomIm"
              width="50px"
            />
          </div>
        ))}
      </>
    </div>
  );
}

export default App;

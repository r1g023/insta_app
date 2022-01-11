import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect--- running--->");
    document.title = user ? `${user}'s feed` : "please log in";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="App">
      <Header user={user} logOut={() => setUser("")} />
      <CreatePost user={user} setPosts={setPosts} posts={posts} />
      <>
        {posts.map((item, index) => {
          console.log("item----->", item);
          return (
            <div className="car" key={index}>
              <p>Content: {item.content}</p>
              {item.image && (
                <img
                  src={URL.createObjectURL(item.image)}
                  alt="imge"
                  width="100"
                  height="100"
                />
              )}
              <p>User: {item.user}</p>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default App;

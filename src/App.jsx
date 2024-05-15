import React from "react";
import "./../src/App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import dreamPost from "../src/postListItems";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = React.useState(null);
  const [posts, setPosts] = React.useState(dreamPost);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Dream Feed";
  }, [user]);

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <Header setUser={setUser} />
      <CreatePost posts={posts} setPosts={setPosts} user={user} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;

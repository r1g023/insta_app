import React from "react";
import Login from "./components/Login";
import "./../src/App.css";
import Header from "./components/Header";
import dreamPost from "./postListItems";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import Github from "./components/Github";

function App() {
  console.log("outside App");
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState(dreamPost);

  //   if (!user) {
  //     return <Login setUser={setUser} />;
  //   }

  return (
    <div style={{ border: "2px solid red", padding: "100px" }}>
      <Github />
      {/* <Header user={user} setUser={setUser} />
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      <PostList posts={posts} />
      <h1>User {user}</h1> */}
    </div>
  );
}

export default App;

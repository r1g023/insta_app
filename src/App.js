import React, { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState("");
  const [postList, setPostList] = useState([
    {
      id: 1,
      title: "My first post",
      body: "This is my first post",
      user: user,
      image: null,
    },
  ]);

  React.useEffect(() => {
    const data = localStorage.getItem("user");

    data ? setUser(JSON.parse(data)) : setUser("");
  }, []);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      {user && <h2>Welcome, {user}</h2>}
      <Logout user={user} setUser={setUser} />
      {console.log("did render", user)}

      <CreatePost postList={postList} setPostList={setPostList} />
      <PostList postList={postList} />
    </div>
  );
}
export default App;

import React from "react";
import "./../src/App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import PostList from "./components/PostList";
import { postListData } from "./postList_data";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = React.useState("");
  const [postList, setPostList] = React.useState(postListData);

  React.useEffect(() => {
    document.title = user ? `welcome ${user}` : "please login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <Header user={user} setUser={setUser} />
      <CreatePost postList={postList} setPostList={setPostList} user={user} />
      <PostList postListData={postList} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

// import axios, { Axios } from "axios";
// const baseURL = "https://api.github.com/users/";
// dummy post list
const dummyPosts = [
  {
    id: 1,
    title: "Post 1",
    body: "Quisque cursus, metus vitae pharetra",
    image: null,
  },
  {
    id: 2,
    title: "Post 2",
    body: "Quisque cursus, metus vitae pharetra",
    image: null,
  },
];

function App() {
  const [postList, setPostList] = useState(dummyPosts);
  console.log("postList------>", postList);
  return (
    <div>
      {console.log("did render")}
      <h1>App</h1>
      <CreatePost postList={postList} setPostList={setPostList} />
      <PostList postList={postList} />
    </div>
  );
}
export default App;

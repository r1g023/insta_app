import React from "react";
import Post from "./Post";
import { PostContext } from "../App";

export default function PostList({ posts }) {
  const { state, dispatch } = React.useContext(PostContext);
  function toggleComplete(itemID) {
    dispatch({ type: "TOGGLE_POST", payload: itemID });
  }
  function deletePost(itemID) {
    if (window.confirm("delete post?")) {
      dispatch({ type: "DELETE_POST", payload: itemID });
    }
  }

  return posts.map((item) => (
    <Post
      {...item}
      key={item.id}
      toggleComplete={toggleComplete}
      deletePost={deletePost}
    />
  ));
}

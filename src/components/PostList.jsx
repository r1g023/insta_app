import React from "react";
import Post from "./Post";

export default function PostList({ posts, toggleCard }) {
  return posts.map((item) => <Post {...item} toggleCard={toggleCard} />);
}

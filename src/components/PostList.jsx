import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  return posts.map((item) => <Post {...item} key={item.id} />);
}

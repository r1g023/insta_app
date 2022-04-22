import React from "react";
import Post from "./Post";

export default function PostList({ posts, toggleCard, onDelete }) {
  return posts.map((item) => (
    <Post {...item} key={item.id} toggleCard={toggleCard} onDelete={onDelete} />
  ));
}

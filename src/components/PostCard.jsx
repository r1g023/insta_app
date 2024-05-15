import React from "react";

function PostCard({ post }) {
  return (
    <div style={{ border: "2px solid red", padding: "10px", width: "150px" }}>
      <p>Id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p>User: {post.user}</p>
      <img src={post.image} alt={post.title} />
    </div>
  );
}

export default PostCard;

import React from "react";

function PostCard({ post }) {
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {post.image && <img src={post.image} alt={post.title} height="100px" />}
      <p>User: {post.user}</p>
    </div>
  );
}

export default PostCard;

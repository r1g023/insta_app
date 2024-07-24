import React from "react";

function PostCard({ post }) {
  return (
    <div style={{ border: "2px solid blue", padding: "30px", width: "130px" }}>
      <p>ID: {post.id}</p>
      <p>POST: {post.title}</p>
      <p>Content: {post.content}</p>
      <p>User: {post.user}</p>
    </div>
  );
}

export default PostCard;

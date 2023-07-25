import React from "react";

function PostCard({ post }) {
  return (
    <div
      className="post"
      style={{
        border: "1px solid red",
        maxWidth: "100px",
        width: "100%",
        margin: "5px",
      }}>
      <h2>Title: {post.title}</h2>
      <p> Body: {post.body}</p>
      {post.image && (
        <img
          src={URL.createObjectURL(post.image)}
          alt="post"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      )}
    </div>
  );
}

export default PostCard;

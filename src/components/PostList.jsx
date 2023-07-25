import React from "react";
import PostCard from "./PostCard";

function PostList({ postList }) {
  return (
    <div
      className="post-list"
      style={{
        display: "flex",
        maxWidth: "500px",
        width: "100%",
        margin: "0 auto 0 auto",
        border: "1px solid green",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}>
      {postList.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>
  );
}

export default PostList;

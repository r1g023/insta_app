import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}>
      {posts.map((item) => {
        return <PostCard post={item} key={item.id} />;
      })}
    </div>
  );
}

export default PostList;

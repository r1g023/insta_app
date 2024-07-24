import React from "react";
import PostCard from "./PostCard";

function PostList({ postListData }) {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}>
      {postListData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

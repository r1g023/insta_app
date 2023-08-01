import React from "react";
import PostCard from "./PostCard";

function PostList({ postList }) {
  return (
    <div
      style={{
        border: "1px solid green",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        margin: "2px",
      }}>
      {postList.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}

export default PostList;

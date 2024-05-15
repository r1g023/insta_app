import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div
      style={{
        border: "2px solid orange",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}
export default PostList;

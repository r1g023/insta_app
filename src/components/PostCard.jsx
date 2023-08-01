import React from "react";

function PostCard({ post }) {
  React.useEffect(() => {
    console.log("post.user", post.user);
    console.log("localStorage.getItem('user')", localStorage.getItem("user"));
  }, [post.user]);
  return (
    <div style={{ border: "1px solid red", width: "150px", margin: "10px" }}>
      <h4>Id: {post.id}</h4>
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
      <p>User: {post.user}</p>
      {post.image && (
        <img
          src={URL.createObjectURL(post.image)}
          alt={post.title}
          maxwidth={"100px"}
          width="100%"
        />
      )}

      {post.user === localStorage.getItem("user") && <button>Delete</button>}
    </div>
  );
}

export default PostCard;

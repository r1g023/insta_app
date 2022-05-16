import React, { useContext } from "react";
import { UserContext, PostContext } from "../App";

export default function Post({
  id,
  content,
  image,
  completed,
  user,
  toggleComplete,
  deletePost,
}) {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser.user === user;

  return (
    <div className="post-container">
      <div
        className={completed ? " completed" : ""}
        onClick={() => toggleComplete(id)}
      >
        <p style={{ color: isCurrentUser ? "green" : "" }}>User: {user}</p>
        <p>Content: {content}</p>
        {image && (
          <img src={URL.createObjectURL(image)} alt="randomIm" width="50px" />
        )}
      </div>
      <button onClick={() => deletePost(id)}>DELETE POST</button>
    </div>
  );
}

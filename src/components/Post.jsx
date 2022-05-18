import React, { useContext } from "react";
import { UserContext, PostContext } from "../App";

export default function Post({
  id,
  content,
  image,
  completed,
  user,
  toggleComplete,
}) {
  const currentUser = useContext(UserContext);
  const { dispatch } = useContext(PostContext);

  const isCurrentUser = currentUser.user === user;

  function deletePost() {
    if (window.confirm("delete post?")) {
      dispatch({ type: "DELETE_POST", payload: { id } });
    }
  }

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
      {isCurrentUser && <button onClick={deletePost}>DELETE POST</button>}
    </div>
  );
}

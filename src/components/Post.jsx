import React, { useContext } from "react";

import { UserContext } from "../App";

export default function Post({
  user,
  id,
  content,
  image,
  completed,
  toggleCard,
  onDelete,
}) {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;
  return (
    <div className="post-container">
      <div
        className={completed ? "completed" : ""}
        onClick={() => toggleCard(id)}
      >
        <p style={{ color: isCurrentUser && "green" }}>User: {user}</p>
        <p>Content: {content}</p>
        {image && (
          <img src={URL.createObjectURL(image)} alt="randomIm" width="50px" />
        )}
      </div>
      <button onClick={() => onDelete(id)}>Delete Post</button>
    </div>
  );
}

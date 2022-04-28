import React from "react";

export default function Post({
  user,
  id,
  content,
  image,
  completed,
  toggleCard,
  onDelete,
}) {
  return (
    <div className="post-container">
      <div
        className={completed ? "completed" : ""}
        onClick={() => toggleCard(id)}
      >
        <p>User: {user}</p>
        <p>Content: {content}</p>
        {image && (
          <img src={URL.createObjectURL(image)} alt="randomIm" width="50px" />
        )}
      </div>
      <button onClick={() => onDelete(id)}>Delete Post</button>
    </div>
  );
}

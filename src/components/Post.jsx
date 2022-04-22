import React from "react";

export default function Post({
  user,
  id,
  content,
  image,
  completed,
  toggleCard,
}) {
  return (
    <div
      className={completed ? "completed" : ""}
      key={id}
      onClick={() => toggleCard(id)}
    >
      <p>User: {user}</p>
      <p>Content: {content}</p>
      {image && (
        <img src={URL.createObjectURL(image)} alt="randomIm" width="50px" />
      )}
    </div>
  );
}

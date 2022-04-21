import React from "react";

export default function Post({ user, id, content, image }) {
  return (
    <div className="postCard" key={id}>
      <p>User: {user}</p>
      <p>Content: {content}</p>
      {image && (
        <img src={URL.createObjectURL(image)} alt="randomIm" width="50px" />
      )}
    </div>
  );
}

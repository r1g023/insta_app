import React, { useContext } from "react";
import { UserContext } from "../App";

export default function Post({ id, content, image, completed }) {
  const { user } = useContext(UserContext);

  return (
    <div className="post-container">
      <div className={completed ? "completed" : ""}>
        <p style={{ color: user ? "green" : "" }}>User: {user}</p>
        <p>Content: {content}</p>
        {image && (
          <img src={URL.createObjectURL(image)} alt="randomIm" width="50px" />
        )}
      </div>
    </div>
  );
}

import React, { useContext } from "react";

import { UserContext } from "../App";

export default function Post({ user, id, content, image, completed }) {
  const currentUser = useContext(UserContext);
  console.log("current user----->", currentUser);
  const isCurrentUser = currentUser === user;
  return (
    <div className="post-container">
      <div className={completed ? "completed" : ""}>
        <p style={{ color: isCurrentUser && "green" }}>User: {user}</p>
        <p>Content: {content}</p>
        {image && (
          <img src={URL.createObjectURL(image)} alt="randomIm" width="50px" />
        )}
      </div>
    </div>
  );
}

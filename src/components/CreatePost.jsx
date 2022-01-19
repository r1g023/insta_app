import React, { useState } from "react";

function CreatePost({ user, setPosts, posts }) {
  const [credentials, setCredentials] = useState({
    content: "",
    image: null,
  });

  function handleChanges(e) {
    console.log(e.target.name, e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newPost = {
      id: Date.now(),
      content: credentials.content,
      image: credentials.image,
      user,
    };
    setPosts([...posts, newPost]);
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          value={credentials.content}
          onChange={handleChanges}
        />
        <input type="file" name="image" onChange={handleChanges} />
        <button>Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

// [e.target.name]:
//         e.target.type === "checkbox" ? e.target.checked : e.target.value

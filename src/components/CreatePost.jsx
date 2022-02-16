import React, { useState } from "react";

function CreatePost({ user, setPosts, posts }) {
  const [credentials, setCredentials] = useState({
    content: "",
    image: null,
  });

  function handleChange(e) {
    console.log(e.target.name, e.target.value, e.target.files);
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
      user: user,
    };
    setPosts([...posts, newPost]);
  }

  return (
    <div className="post">
      <h2>CreatePost</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          name="content"
          onChange={handleChange}
          value={credentials.content}
        />
        {/* Image upload file */}
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" onChange={handleChange} />
        {/* button to upload a file */}
        <button>Upload file</button>
      </form>
      <p>Content: {credentials.content}</p>
    </div>
  );
}

export default CreatePost;

import React, { useState } from "react";

function CreatePost({ setPosts, user, posts }) {
  const [credentials, setCredentials] = useState({
    content: "",
    image: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    let newPost = {
      id: Date.now(),
      content: credentials.content,
      user: user,
      image: credentials.image,
    };
    setPosts([...posts, newPost]);
  }

  function handleChanges(e) {
    console.log(e.target.name, e.target.value, "files-->", e.target.files);
    setCredentials({
      ...credentials,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          onChange={handleChanges}
          value={credentials.content}
        />
        <input type="file" name="image" onChange={handleChanges} />
        <button>Submit</button>
      </form>
      {/* <>
        <p>Content: {credentials.content}</p>
        <p>User: {credentials.user}</p>
        {credentials.image && (
          <img
            src={URL.createObjectURL(credentials.image)}
            alt="fadfadf"
            height="50"
            width="50"
          />
        )}
      </> */}
    </div>
  );
}

export default CreatePost;

// [e.target.name]:
//         e.target.type === "checkbox" ? e.target.checked : e.target.value

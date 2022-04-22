import React, { useState, useRef } from "react";

function CreatePost({ addAPost, user }) {
  const [newPost, setNewPost] = useState({
    content: "",
    image: null,
    completed: false,
  });

  const ref = useRef();

  function handleChanges(e) {
    console.log(e.target.name, e.target.value, e.target.files);
    setNewPost({
      ...newPost,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const createNewPost = {
      id: Date.now(),
      user: user,
      content: newPost.content,
      image: newPost.image,
      completed: newPost.completed,
    };
    setNewPost({ ...newPost, content: "" });
    addAPost(createNewPost);
    ref.current.value = ""; // clear out image input
  }

  return (
    <div className="post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image</label>
        <input type="file" name="image" onChange={handleChanges} ref={ref} />

        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          value={newPost.content}
          onChange={handleChanges}
        />
        <button>New Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

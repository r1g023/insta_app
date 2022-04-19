import React, { useState, useRef } from "react";

function CreatePost({ setPosts, posts, user }) {
  const [newPost, setNewPost] = useState({
    content: "",
    image: null,
  });

  const ref = useRef();

  const reset = () => {
    ref.current.value = "";
  };

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
    };
    setNewPost({ ...newPost, content: "", image: "" });
    setPosts([...posts, createNewPost]);
    reset(); // clear out image input
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

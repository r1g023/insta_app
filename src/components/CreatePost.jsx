import React, { useState } from "react";

function CreatePost({ user, posts, setPosts }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    let newPost = {
      id: Date.now(),
      content: content,
      image: image,
      user: user,
    };
    setPosts([...posts, newPost]);
  }

  function handleImageInput(e) {
    console.log(e.target.name, ": ", e.target.files);
    setImage(e.target.files[0]);
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <input type="file" name="image" onChange={handleImageInput} />
        <button>Submit Posts</button>
      </form>
    </div>
  );
}

export default CreatePost;

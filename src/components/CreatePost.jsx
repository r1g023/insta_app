import React, { useState } from "react";

function CreatePost({ user, setPosts, posts }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const post = { content: content, image: image, user: user };
    const newPost = [...posts, post];
    setPosts(newPost);
  }
  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          name="image"
          onChange={(e) => {
            console.log(e.target.files);
            setImage(e.target.files[0]);
          }}
        />
        <button>Submit form</button>
      </form>
      {/* {test} */}
      {/* <p>Content: {content}</p> */}
      {/* {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="textpic"
          height="100"
          width="100"
        />
      )} */}
    </div>
  );
}

export default CreatePost;

import React from "react";

function CreatePost({ postList, setPostList }) {
  const [post, setPost] = React.useState({
    title: "",
    body: "",
    image: null,
  });

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name, e.target.value);
    setPost({
      ...post,
      [e.target.name]: e.target.files ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPost = {
      title: post.title,
      body: post.body,
      image: post.image,
    };
    setPostList([...postList, newPost]);
    setPost({
      title: "",
      body: "",
      image: null,
    });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={post.title}
          />
        </label>

        <label htmlFor="body">
          Body
          <input
            type="text"
            name="body"
            id="body"
            onChange={handleChange}
            value={post.body}
          />
        </label>

        <label htmlFor="image">
          Image
          <input type="file" name="image" id="image" onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;

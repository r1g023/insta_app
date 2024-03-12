import React from "react";

function CreatePost({ user, posts, setPosts }) {
  const [post, setPost] = React.useState({
    title: "",
    body: "",
    image: null,
  });

  const clearRef = React.useRef();

  function handleChanges(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.files ? e.target.files[0] : e.target.value,
    });
  }

  function createPost(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
      image: URL.createObjectURL(post.image),
      user: user,
    };

    setPosts([...posts, newPost]);
    setPost({ title: "", body: "", image: (clearRef.current.value = "") });
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={createPost}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChanges}
            placeholder="Title..."
          />
        </label>

        <label htmlFor="body">
          Body:
          <input
            type="text"
            id="body"
            name="body"
            value={post.body}
            onChange={handleChanges}
            placeholder="Body..."
          />
        </label>

        <label htmlFor="image">
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChanges}
            ref={clearRef}
          />
        </label>
        <button>Add Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

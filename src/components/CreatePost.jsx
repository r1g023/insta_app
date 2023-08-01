import React from "react";

function CreatePost({ postList, setPostList }) {
  const [post, setPost] = React.useState({
    id: "",
    title: "",
    body: "",
    image: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    let newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
      image: post.image,
      user: localStorage.getItem("user"),
    };

    setPostList([...postList, newPost]);
  }

  const handleChanges = (e) => {
    console.log(e.target.name, e.target.value);
    setPost({
      ...post,
      [e.target.name]: e.target.files ? e.target.files[0] : e.target.value,
    });
  };

  return (
    <div>
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        {/*title */}
        <input
          type="text"
          placeholder="title"
          name="title"
          value={post.title}
          onChange={handleChanges}
        />
        {/*body */}
        <input
          type="text"
          placeholder="body"
          name="body"
          value={post.body}
          onChange={handleChanges}
        />
        {/*image */}
        <input type="file" name="image" onChange={handleChanges} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;

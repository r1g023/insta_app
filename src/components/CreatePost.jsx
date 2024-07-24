import React from "react";

function CreatePost({ postList, setPostList, user }) {
  const [myPost, setMyPost] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    setMyPost({
      ...myPost,
      [event.target.name]: event.target.value,
    });
  }

  function createNewPost(event) {
    event.preventDefault();
    console.log(myPost);
    let NewPost = {
      id: Date.now(),
      title: myPost.title,
      content: myPost.content,
      user: user,
    };
    console.log(NewPost);
    setPostList([...postList, NewPost]);
    setMyPost({
      title: "",
      content: "",
    });
  }

  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <form
        onSubmit={createNewPost}
        style={{ border: "2px solid blue", padding: "30px" }}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={myPost.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Content"
          value={myPost.content}
          onChange={handleChange}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

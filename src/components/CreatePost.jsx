import React from "react";

function CreatePost({ setPosts, posts, user }) {
  const [myPost, setMyPost] = React.useState({
    title: "",
    body: "",
    image: null,
  });

  React.useEffect(() => {
    const post = JSON.parse(localStorage.getItem("myPost"));
    if (post) {
      setMyPost(post);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("myPost", JSON.stringify(myPost));
  }, [myPost]);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setMyPost({
      ...myPost,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  function addPost(e) {
    e.preventDefault();
    let newPost = {
      id: Date.now(),
      title: myPost.title,
      body: myPost.body,
      image: URL.createObjectURL(myPost.image),
      user: user,
    };
    setPosts([...posts, newPost]);
  }

  return (
    <div>
      <form onSubmit={addPost}>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={myPost.title}
          name="title"
        />
        <input
          type="text"
          placeholder="Body"
          onChange={handleChange}
          value={myPost.body}
          name="body"
        />
        <input type="file" onChange={handleChange} name="image" />
        <button>Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

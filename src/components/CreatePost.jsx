import React, { useState, useRef, useEffect } from "react";
import * as yup from "yup";

function CreatePost({ addAPost, user, toggleModalNow }) {
  const [newPost, setNewPost] = useState({
    content: "",
    image: null,
    completed: false,
  });

  //errors for form validation
  const [errors, setErrors] = useState(newPost);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const ref = useRef();

  //Form validation error for inputs
  let formSchema = yup.object().shape({
    content: yup
      .string()
      .required("please enter content")
      .min(3, "min of 3 characters needed on content input"),
    image: yup.mixed().required("please upload a file"),
  });

  useEffect(() => {
    formSchema.isValid(newPost).then((valid) => {
      console.log("button enabled--->", valid);
      setButtonDisabled(!valid);
    });
  }, [newPost]);
  console.log("errors-...>", errors);

  //validate for errors if inputs are not filled out completely based on yup
  function ValidateChanges(e) {
    //get by input name
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.type === "file" ? e.target.files[0] : e.target.value)
      .then((valid) => {
        console.log("valid, no errors---->", valid);
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("errors on yup validation---->", err.errors);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  }

  function handleChanges(e) {
    e.persist();
    ValidateChanges(e);
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
    toggleModalNow(); // remove modal upon submitting new post
    ref.current.value = ""; // clear out image input
  }

  return (
    <div className="post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">
          Image
          <input type="file" name="image" onChange={handleChanges} ref={ref} />
          {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
        </label>

        <label htmlFor="content">
          Content
          <input
            type="text"
            name="content"
            value={newPost.content}
            onChange={handleChanges}
          />
          {errors.content ? (
            <p style={{ color: "red" }}>{errors.content}</p>
          ) : null}
        </label>
        <button disabled={buttonDisabled}>New Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

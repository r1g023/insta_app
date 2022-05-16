import React, { useState, useRef, useEffect, useContext } from "react";

import useForm from "../formHooks/useForm";
import { PostContext } from "../App";

function CreatePost({ user }) {
  const { state, dispatch } = useContext(PostContext);
  console.log("state---->", state);
  const [value, setValue, errors, buttonDisabled, ref, handleChanges] = useForm(
    {
      content: "",
      image: null,
      completed: false,
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    const post = {
      id: Date.now(),
      user: user,
      content: value.content,
      image: value.image,
      completed: value.completed,
    };
    dispatch({ type: "ADD_POST", payload: { newPost: post } });
    setValue({ ...value, content: "" });
    ref.current.value = ""; // clear out image input
  }

  return (
    <div className="post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">
          Image
          <input type="file" name="image" onChange={handleChanges} ref={ref} />
          {errors.image === null ? (
            <p style={{ color: "red" }}>{errors.image}</p>
          ) : null}
        </label>

        <label htmlFor="content">
          Content
          <input
            type="text"
            name="content"
            value={value.content}
            onChange={handleChanges}
          />
          {errors.content.length > 0 ? (
            <p style={{ color: "red" }}>{errors.content}</p>
          ) : null}
        </label>
        <button disabled={buttonDisabled}>New Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

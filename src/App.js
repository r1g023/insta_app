import React, { useState, useEffect, useCallback, createContext } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Modal from "./components/Modal";
import PostList from "./components/PostList";

const functionsCount = new Set();
export const UserContext = createContext(); //object with 2 properties
//provider property = to past data that we want to pass down to our component tree.
// consumer property to consume or use the data that we are passing down to our component tree
//wrap components with UserContext.Provider

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([
    {
      id: Date.now(),
      content: "test",
      user: user,
      image: null,
      completed: false,
    },
  ]);
  const [toggleModal, setToggleModal] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = user ? `welcome ${user}` : "Please login";
  }, [user]);

  function handleToggleModal() {
    setToggleModal(!toggleModal);
  }

  //use callback
  const addAPost = React.useCallback(
    (newPost) => {
      setPosts([...posts, newPost]);
    },
    [posts]
  );

  //when do we need to recreate this addAPost function? When something changes when do we actually need create this function and execute it. We want to do that when our POST ARRAY changes.

  const toggleCard = (itemID) => {
    let handleToggle = posts.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setPosts(handleToggle);
  };

  const deleteToggleSelected = React.useCallback(() => {
    let result = posts.filter((item) => !item.completed);
    console.log("toggle delete-->", result);

    return setPosts(result);
  }, [posts]);

  function deletePost(itemID) {
    let result = posts.filter((item) => itemID !== item.id);
    if (window.confirm("Are you sure you want to delete note?"))
      return setPosts(result);
  }

  // AddAPost callback is being recreated when state changes. It gets recreated, so we need to take care of performance. How to fix that from being recreated unnecessarily? We use the useCallback Hook.MEMOIZED CALLBACK to addAPost
  functionsCount.add(addAPost);
  functionsCount.add(deleteToggleSelected);

  console.log(functionsCount);

  if (!user) return <Login setUser={setUser} />;

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header user={user} signOut={() => setUser("")} />
        <button onClick={handleToggleModal}>Open Modal</button>
        {toggleModal ? (
          <Modal onCancel={handleToggleModal}>
            <CreatePost
              addAPost={addAPost}
              user={user}
              closeModal={handleToggleModal}
              toggleModalNow={setToggleModal}
            />
          </Modal>
        ) : null}
        <div className="post-wrapper">
          <PostList
            posts={posts}
            toggleCard={toggleCard}
            onDelete={deletePost}
          />
        </div>
        <button onClick={deleteToggleSelected}>Delete Global Card</button>
        <button
          style={{ color: "red" }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          SET COUNT
        </button>
        <p style={{ color: "red" }}>Count: {count}</p>
      </div>
    </UserContext.Provider>
  );
}

export default App;

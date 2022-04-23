import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Modal from "./components/Modal";
import PostList from "./components/PostList";

const functionsCount = new Set();

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    document.title = user ? `welcome ${user}` : "Please login";
  }, [user]);

  function handleToggleModal() {
    setToggleModal(!toggleModal);
  }

  const addAPost = React.useCallback(
    (newPost) => {
      setPosts([...posts, newPost]);
    },
    [posts]
  );

  function toggleCard(itemID) {
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
  }

  function deleteToggleSelected() {
    let deletedCard = posts.filter((item) => !item.completed);
    setPosts(deletedCard);
  }

  function deletePost(itemID) {
    let result = posts.filter((item) => itemID !== item.id);
    setPosts(result);
  }

  functionsCount.add(addAPost);
  console.log(functionsCount);

  if (!user) return <Login setUser={setUser} />;

  return (
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
      <>
        <PostList posts={posts} toggleCard={toggleCard} onDelete={deletePost} />

        <button onClick={deleteToggleSelected}>Delete Global Card</button>
      </>
    </div>
  );
}

export default App;

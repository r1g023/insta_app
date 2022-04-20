import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Modal from "./components/Modal";

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

  if (!user) return <Login setUser={setUser} />;
  return (
    <div className="App">
      <Header user={user} signOut={() => setUser("")} />
      <button onClick={handleToggleModal}>Open Modal</button>
      {toggleModal ? (
        <Modal onCancel={handleToggleModal}>
          <CreatePost
            setPosts={setPosts}
            posts={posts}
            user={user}
            closeModal={handleToggleModal}
          />
        </Modal>
      ) : null}
      <>
        {posts.map((item) => (
          <div className="postCard" key={item.id}>
            <p>User: {item.user}</p>
            <p>Content: {item.content}</p>
            <img
              src={URL.createObjectURL(item.image)}
              alt="randomIm"
              width="50px"
            />
          </div>
        ))}
      </>
    </div>
  );
}

export default App;

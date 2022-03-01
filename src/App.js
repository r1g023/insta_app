import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Modal from "./components/Modal";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = user ? `Welcome ${user}` : "please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;

  function handleToggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="App">
      App
      <Header user={user} signOut={setUser} />
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {/* open modal to create a new post */}
      {modalOpen ? (
        <Modal
          title="Modal component"
          onClose={handleToggleModal}
          onCancel={handleToggleModal}
        >
          <CreatePost user={user} posts={posts} setPosts={setPosts} />
        </Modal>
      ) : null}
      <>
        {posts.map((item) => (
          <div className="post" key={item.id}>
            {console.log("item---->", item)}
            <p>Content: {item.content}</p>
            <p>User: {item.user}</p>
            {item.image && (
              <img
                src={URL.createObjectURL(item.image)}
                alt="post"
                height="50"
              />
            )}
          </div>
        ))}
      </>
    </div>
  );
}

export default App;

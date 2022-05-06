import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useReducer,
} from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Modal from "./components/Modal";
import PostList from "./components/PostList";
import PostReducer from "./reducers/reducers";

export const UserContext = createContext(); //object with 2 properties
//provider property = to past data that we want to pass down to our component tree.
// consumer property to consume or use the data that we are passing down to our component tree
//wrap components with UserContext.Provider
export const PostContext = createContext({
  posts: [],
});

function App() {
  const [user, setUser] = useState("");

  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(PostReducer, initialPostState);
  console.log("state------------------------>", state);

  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    document.title = user ? `welcome ${user}` : "Please login";
  }, [user]);

  function handleToggleModal() {
    setToggleModal(!toggleModal);
  }

  if (!user) return <Login setUser={setUser} />;

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <div className="App">
          <Header user={user} signOut={() => setUser("")} />
          <button onClick={handleToggleModal}>Open Modal</button>
          {toggleModal ? (
            <Modal onCancel={handleToggleModal}>
              <CreatePost
                user={user}
                closeModal={handleToggleModal}
                toggleModalNow={setToggleModal}
              />
            </Modal>
          ) : null}
          <div className="post-wrapper">
            <PostList posts={state.posts} />
          </div>
        </div>
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;

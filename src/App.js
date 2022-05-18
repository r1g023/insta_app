import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { initialState, postReducer } from "./reducers/reducers";

export const UserContext = createContext();
export const PostContext = createContext();

function App() {
  const [user, setUser] = useState("");
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    document.title = user ? `welcome ${user}` : "Please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />

          <CreatePost user={user} />

          <div className="post-wrapper">
            <PostList posts={state.posts} />
          </div>
          <button onClick={() => dispatch({ type: "DELETE_TOGGLE_SELECTED" })}>
            DELETE TOGGLE SELECTED
          </button>
        </div>
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;

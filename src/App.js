import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      text
      done
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation toggleTodo($id: uuid!, $done: Boolean!) {
    update_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {
      returning {
        id
        text
        done
      }
    }
  }
`;

const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    insert_todos(objects: { text: $text }) {
      returning {
        id
        text
        done
      }
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: uuid!) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        id
        text
        done
      }
    }
  }
`;

function App() {
  const [myText, setMyText] = useState("");
  const { data, error, loading } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [addTodo] = useMutation(ADD_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  //toggle todo
  function handleToggle(todo) {
    toggleTodo({ variables: { id: todo.id, done: !todo.done } });
  }

  //add todo
  async function handleSubmit(e) {
    e.preventDefault();
    let newPost = await addTodo({
      variables: { text: myText },
      refetchQueries: [{ query: GET_TODOS }],
    });
    console.log("new Post----->", newPost);
    return newPost;
  }

  //delete todo
  async function handleDelete(todo) {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    //confirm if delete?
    if (confirmDelete) {
      let deletedPost = await deleteTodo({
        variables: { id: todo.id },
        //get from cache and update it
        update: (cache) => {
          console.log("cache------>", cache);
          const prevData = cache.readQuery({ query: GET_TODOS });
          console.log("prevData------>", prevData);
          const newData = prevData.todos.filter((item) => item.id !== todo.id);
          console.log("newData------>", newData);
          // once all data has been cleared from cache and added to newData, we write it(update) to the cache so that when item gets deleted, it will query todos array and update the todos array with the new data array.
          cache.writeQuery({
            query: GET_TODOS,
            data: { todos: newData },
          });
        },
      });
      return deletedPost;
    }
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;
  console.log("data---->", data);
  return (
    <div className="vh-100 code flex flex-column items-center bg-purple white pa3">
      <h1>
        GraphQL Checklist
        <span role="img" aria-label="checkmark">
          ✅
        </span>
      </h1>

      <form onSubmit={handleSubmit} className="mb3">
        <input
          type="text"
          className="pa2 f4 b--dashed"
          name="myText"
          value={myText}
          onChange={(e) => setMyText(e.target.value)}
        />
        <button className="pa2 f4 bg-green">Add Todo</button>
      </form>

      <div className="flex items-center justify-center flex-column">
        {data.todos.map((item) => (
          <p
            key={item.id}
            className={`f2 pointer ${item.done ? "strike" : ""}`}
            onDoubleClick={() => handleToggle(item)}
          >
            Text: {item.text}
            <button
              className="bg-transparent f4 bn"
              onClick={() => handleDelete(item)} //delete todo
            >
              <span className="red f3">X</span>
            </button>
          </p>
        ))}
      </div>
      <p>MY TEXT: {myText}</p>
    </div>
  );
}

export default App;

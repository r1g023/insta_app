import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_TODOS = gql`
  query todos {
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
  const { loading, error, data } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => setMyText(""),
  });
  const [deleteTodo] = useMutation(DELETE_TODO);

  async function handleToggle(todo) {
    let data = await toggleTodo({
      variables: { id: todo.id, done: !todo.done },
    });
    console.log("toggle todo--->", data);
    return data;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!myText.trim()) return null;
    let data = await addTodo({
      variables: { text: myText },
      refetchQueries: [{ query: GET_TODOS }],
    });
    console.log("add todo--->", data);
    return data;
  }

  async function handleDelete(todo) {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      let data = await deleteTodo({
        variables: { id: todo.id },
        //UPDATE gives us direct access to the cached data
        update: (cache) => {
          console.log("cache--->", cache);
          // prevData - all data before mutation is performed (or deleted)
          const prevData = cache.readQuery({ query: GET_TODOS });
          //now that it's deleted we need to remove it from the cache
          const newTodos = prevData.todos.filter((item) => {
            console.log("item delete-------->", item);
            return item.id !== todo.id;
          });
          console.log("newTodos--->", newTodos);
          cache.writeQuery({ query: GET_TODOS, data: { todos: newTodos } });
        },
      });
      console.log("delete todo--->", data);
      return data;
    }
  }

  console.log("data-->", data);
  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h1>Error.....</h1>;
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

      {/* todos  */}
      <div className="flex items-center justify-center flex-column">
        {data.todos.map((item) => (
          <p key={item.id} onDoubleClick={() => handleToggle(item)}>
            <span className={`pointer list pa1 f3 ${item.done && "strike"}`}>
              Text: {item.text}
              <button
                className="bg-transparent f4 bn"
                onClick={() => handleDelete(item)}
              >
                <span className="red f2">&times;</span>
              </button>
            </span>
          </p>
        ))}
      </div>
      <p>MY TEXT: {myText}</p>
    </div>
  );
}

export default App;

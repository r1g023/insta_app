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

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  async function handleToggle(todo) {
    let data = await toggleTodo({
      variables: { id: todo.id, done: !todo.done },
    });
    console.log("toggle todo--->", data);
    return data;
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

      <form onSubmit={null} className="mb3">
        <input type="text" className="pa2 f4 b--dashed" />
        <button className="pa2 f4 bg-green">Add Todo</button>
      </form>

      {/* todos  */}
      <div className="flex items-center justify-center flex-column">
        {data.todos.map((item) => (
          <p key={item.id} onDoubleClick={() => handleToggle(item)}>
            <span className={`pointer list pa1 f3 ${item.done && "strike"}`}>
              Text: {item.text}
              <button className="bg-transparent f4 bn">
                <span className="red f2">&times;</span>
              </button>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;

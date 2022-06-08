import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      text
      done
    }
  }
`;

function App() {
  const todo = useQuery(GET_TODOS);
  console.log("todo---------->", todo);
  if (todo.loading) return <div>Loading....</div>;
  if (todo.error) return <div>Error...</div>;
  return (
    <div className="App">
      App
      {todo.data.todos.map((item) => (
        <div key={item.id}>
          <p>Text: {item.text}</p>
          <p>Done: {item.done ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

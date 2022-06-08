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

function App() {
  const { error, loading, data } = useQuery(GET_TODOS);

  console.log("todo---------->", data);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error....</div>;

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
          <p key={item.id}>
            <span className={`pointer list pa1 f3`}>
              Text: {item.text}
              {/* X remove button  */}
              <button className="bg-transparent bn f4">
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

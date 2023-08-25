import React from "react";
// use the useState hook to create a state variable
function App() {
  const [count, setCount] = React.useState(0);

  // first squash test
  // second squash test
  // third squash test
  // fourth squash test
  // fifth squash test

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default App;

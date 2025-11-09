// ParentComponent.jsx
import React, { useState } from "react";


export const ParentComponent=()=> {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ChildComponent count={count} />
    </div>
  );
}

const ChildComponent=({ count })=> {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Received count: {count}</p>
    </div>
  );
}



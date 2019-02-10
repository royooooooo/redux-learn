import React, { useState } from "react";
import Children from "./Children";
import Children1 from "./Children1";

const Father = () => {
  let test = "child 2";
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }} >add 1</button>
    </div>
  );
};

export default Father;

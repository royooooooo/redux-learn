import React, { useState, useEffect } from "react";
import Children from "./Children";
import Children1 from "./Children1";

const Father = () => {
  let test = "child 2";
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ test1: "test", test2: "test2" });

  useEffect(() => {
    return () => {
      console.log("effect");
    };
  });

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add 1
      </button>
      <div
        onClick={() => {
          setObj({ ...obj, test1: "test1" });
        }}
      >
        {JSON.stringify(obj)}
      </div>
    </div>
  );
};

export default Father;

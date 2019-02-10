import React from "react";
import Children from "./Children";
import Children1 from "./Children1";

const Father = () => {
  let test = "child 2";

  return (
    <div>
      <Children text={test} />
      <Children1 text={test} />
    </div>
  );
};

export default Father;

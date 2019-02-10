import React, { Component } from "react";
import { HocComponent } from "./component/HocTest";
import Father from "./component/Father";

class App extends Component {
  render() {
    return (
      <div>
        <Father />
      </div>
    );
  }
}

export default App;

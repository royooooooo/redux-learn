import { Component } from "react";
import React from "react";

interface IChildComponent {
  name?: string;
  age?: number;
}

const hocComponentCreator = (WrappedComponent: React.ComponentType<any>) =>
  class WrapperComponent extends Component {
    render() {
      const newProps = {
        name: "Fu Yi",
        age: 23
      };
      return <WrappedComponent {...newProps} />;
    }
  };

export class WrappedComponent extends Component<IChildComponent> {
  render() {
    return (
      <>
        <div>{this.props.name || "No Name"}</div>
        <div>{this.props.age || 12}</div>
      </>
    );
  }
}

export const HocComponent = hocComponentCreator(WrappedComponent);

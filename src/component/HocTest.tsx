import React, { Component, ComponentClass } from "react";

interface IWrappedComponentProps {
  name?: string;
  age?: number;
}

const hocComponentCreator = (params: any) => (
  WrappedComponent: ComponentClass<any>
) =>
  class extends Component {
    render() {
      return <WrappedComponent {...params} />;
    }
  };

class WrappedComponent extends Component<IWrappedComponentProps> {
  render() {
    return (
      <>
        <div>{this.props.name || "No Name"}</div>
        <div>{this.props.age || 12}</div>
      </>
    );
  }
}

export const HocComponent = hocComponentCreator({ name: "Fu Yi", age: 23 })(
  WrappedComponent
);

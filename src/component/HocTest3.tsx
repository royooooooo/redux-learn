import React, { Component, ComponentClass } from "react";

interface IWrappedComponentProps {
  name?: string;
  age?: number;
}

interface IWrappedComponentState {
  gender: string;
}

// HOC Component
const hocComponentCreator = (WrappedComponent: ComponentClass<any>) =>
  class extends WrappedComponent {
    render() {
      this.state = {
        gender: "female"
      };
      return super.render();
    }
  };

class WrappedComponent extends Component<
  IWrappedComponentProps,
  IWrappedComponentState
> {
  constructor(props: IWrappedComponentProps) {
    super(props);
    this.state = {
      gender: "male"
    };
  }
  render() {
    return (
      <>
        <div>{this.props.name || "No Name"}</div>
        <div>{this.props.age || 12}</div>
        <div>{this.state.gender}</div></>
    );
  }
}

export const HocComponent = hocComponentCreator(WrappedComponent);

import React from "react";

export default class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Component number {this.props.params.id}</h1>
      </div>
    );
  }
}
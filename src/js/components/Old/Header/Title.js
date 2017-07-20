import React from "react";


export default class Title extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.name}</h2>
      </div>
    );
  }
}
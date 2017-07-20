import React from "react";

import Job from "../components/Job";

export default class Position extends React.Component {
  render() {

    console.log("position");

    return (
      <div>
           <Job title={this.props.params.position} content="Some position content"></Job>
      </div>
    );
  }
}
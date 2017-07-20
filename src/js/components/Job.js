import React from "react";

export default class Job extends React.Component {
  render() {
    const { title } = this.props;
    const { content } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>{content}</p>
        <a class="btn btn-default" href="#">Read more</a>
      </div>
    );
  }
}
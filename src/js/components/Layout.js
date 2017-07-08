import React from "react";
import { Link } from "react-router";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} name="Kottekorv"/>
        <Body />
        <Link to="component1">Component1</Link>
        <Link to="component2">Component2</Link>
        <Footer />
      </div>
    );
  }
}
import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const positionsClass = location.pathname.match(/^\/positions/) ? "active" : "";
    const overviewClass = location.pathname.match(/^\/overview/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
              </li>
              <li class={positionsClass}>
                <Link to="positions" onClick={this.toggleCollapse.bind(this)}>Position</Link>
              </li>
              <li class={overviewClass}>
                <Link to="overview" onClick={this.toggleCollapse.bind(this)}>Overview</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
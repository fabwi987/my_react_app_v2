import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./components/Layout"
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Layout} />
            <Route path="component1" component={Component1}></Route>
            <Route path="component2" component={Component2}></Route>
    </Router>,
    document.getElementById('app')
);
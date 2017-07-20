import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Overview from "./pages/Overview";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Position from "./pages/Position";
import Todos from "./pages/Todos";

ReactDOM.render(
    <Router history={hashHistory}>
         <Route path="/" component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path="positions(/:position)" name="positions" component={Position}>This is my children</Route>
            <Route path="overview" name="overview" component={Overview}></Route>
         </Route>
    </Router>,
    document.getElementById('app')
);
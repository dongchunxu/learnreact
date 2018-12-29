import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, Switch, HashRouter, BrowserRouter, Redirect} from 'react-router-dom';
import Home from "./Home";

import UserGist from './ajax/UserGist';
import MyComponent from './refs/MyComponent';

ReactDOM.render(
    <MyComponent/>, document.getElementById("root")
);
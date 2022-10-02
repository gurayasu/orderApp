import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import GlobalNav from "./GlobalNav";
import Top from "./Top";
import About from "./About";
import { Menus } from "../containers/Menus";
import { Orders } from "../containers/Orders";
import Register from "./Register";
import Login from "./Login";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:80/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

function App() {
    return (
        <BrowserRouter>
            <GlobalNav />
            <Switch>
                <Route exact path="/">
                    <Top />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/menus">
                    <Menus />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

if (document.getElementById("nav")) {
    ReactDOM.render(<App />, document.getElementById("nav"));
}

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import GlobalNav from "./GlobalNav";
import Top from "./Top";
import About from "./About";
import { Menus } from "../containers/Menus";
import { Orders } from "../containers/Orders";
import { OrderHistory } from "../containers/OrderHistory";
import { AdminTable } from "../containers/AdminTable";
import Register from "./Register";
import Login from "./Login";
import axios from "axios";

axios.defaults.baseURL = process.env.APP_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <GlobalNav />
                    {/* <Top /> */}
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
                <Route path="/order_history">
                    <OrderHistory />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route path="/admin">
                    <AdminTable />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

if (document.getElementById("nav")) {
    ReactDOM.render(<App />, document.getElementById("nav"));
}

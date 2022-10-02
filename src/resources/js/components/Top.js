import React from "react";
import "../../css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Menus } from "../containers/Menus";
import { Orders } from "../containers/Orders";

const Top = () => {
    return (
        <Router>
            <Switch>
                {/* メニュー一覧ページ */}
                <Route exact path="/menus">
                    <Menus />
                </Route>
                {/* 注文ページ */}
                <Route exact path="/orders">
                    <Orders />
                </Route>
            </Switch>
        </Router>
    );
};

export default Top;

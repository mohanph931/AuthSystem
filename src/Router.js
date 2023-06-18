import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Component/Home/Home";
import UserRegister from "./Component/User/UserRegister/Register";
import UserLogin from "./Component/User/UserLogin/Login";
import UserDashborad from "./Component/User/Dashboard/Dashboard";
import RoutePath from "./RoutePath";

export default () => (
  <Switch>
    <Route exact path={RoutePath.Home} component={HomePage} />
    <Route path={RoutePath.userRegister} component={UserRegister} />
    <Route exact path={RoutePath.userLogin} component={UserLogin} />
    <Route path={RoutePath.success} component={UserDashborad} />
  </Switch>
);

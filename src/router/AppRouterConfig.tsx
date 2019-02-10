import React from "react";
import { Redirect, Route, Router, RouterProps, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { homeRouteConfig } from "../home/router";
import { map } from "lodash";

const routers = [...homeRouteConfig];

const history = createBrowserHistory();

const MainRoutesContainer = () => (
  <Switch>
    <Redirect from={"/"} to={"/home"} exact />
    {map(routers, (route, idx) => (
      <Route key={idx} {...route} />
    ))}
  </Switch>
);

const AppRouterConfig = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route component={MainRoutesContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouterConfig;

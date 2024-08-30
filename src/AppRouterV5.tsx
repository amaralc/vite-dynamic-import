import { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";

const Foo = lazy(() => import("./Foo"));

export const AppRouterV5 = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/foo">
          <Foo/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

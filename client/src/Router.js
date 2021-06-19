import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Details from "./pages/Details";
import History from "./pages/History";
import Settings from "./pages/Settings";

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={History} />
        <Route path="/build/:number" component={Details} />
        <Route path="/settings" component={Settings} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

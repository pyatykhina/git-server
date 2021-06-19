import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Details from "./pages/Details";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";

function Router(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <main>
            <Switch>
              <Route path="/" exact component={History} />
              <Route path="/build/:number" component={Details} />
              <Route path="/settings" component={Settings} />
              <Redirect from='*' to='/' />
            </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;

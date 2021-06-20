import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Details from "./pages/Details";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Start from "./pages/Start";
import Footer from "./components/Footer";

function Router(props) {
  const repository = {};

  return (
    <BrowserRouter>
      <div className="wrapper">
        <main>
            <Switch>
              {
                repository 
                  ? <Route path="/" exact component={History} />
                  : <Route path="/" exact component={Start} />
              }
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

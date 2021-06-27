import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSettings } from "./redux/middlewares";

import Details from "./pages/Details";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Start from "./pages/Start";
import Footer from "./components/Footer";

function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  const repository = useSelector(state => state.settings);

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
              <Route path="/build/:id" component={Details} />
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

import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "./components/Layout";

import About from "./pages/About";
import Start from "./pages/Start";
import Features from "./pages/Features";

const ROUTES = {
  ABOUT: "/about",
  FEATURES: "/features",
  START: "/",
};

export default function App() {
  const location = useLocation();

  return (
    <Layout showLaunchAppButton={location.pathname !== ROUTES.FEATURES}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 300, exit: 0 }}
        >
          <Switch>
            <Route path={ROUTES.ABOUT}>
              <About />
            </Route>
            <Route path={ROUTES.FEATURES}>
              <Features />
            </Route>
            <Route path={ROUTES.START}>
              <Start />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "./components/Layout";

import About from "./pages/About";
import Start from "./pages/Start";
import Features from "./pages/Features";

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 300, exit: 0 }}
        >
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/features">
              <Features />
            </Route>
            <Route path="/">
              <Start />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

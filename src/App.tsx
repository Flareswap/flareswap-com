import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Start from "./pages/Start";
import Features from "./pages/Features";

export default function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

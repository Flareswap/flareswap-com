import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Start from "./pages/Start";
import Trade from "./pages/Trade";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/trade">
            <Trade />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

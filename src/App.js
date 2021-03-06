import React from "react";
import Home from "./components/views/Home.js";
import { Resume } from "./components/views/Resume.js";
import TheRoni from "./components/views/TheRoni.js";
import { UnknownRoute } from "./components/views/UnknownRoute.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/theroni" component={TheRoni} />
        <Route component={UnknownRoute} />
      </Switch>
    </Router>
  );
};

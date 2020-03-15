/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import CovidPythonGame from "./pages/covid-python-game";

const App: FunctionComponent = () => (
  <Switch>
    <Route path="/covid-python-game">
      <CovidPythonGame />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export const AppWithoutRouter = App;

export default () => (
  <Router>
    <App />
  </Router>
);

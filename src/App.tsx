/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import BrythonPage from "./pages/brython";
import VirusPage from "./pages/virus";

const App: FunctionComponent = () => (
  <Switch>
    <Route path="/brython">
      <BrythonPage />
    </Route>
    <Route path="/virus">
      <VirusPage />
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

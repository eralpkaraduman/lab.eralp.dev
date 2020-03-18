/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FunctionComponent, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layouts/default-layout";

const HomePage = React.lazy(() => import("./pages/home"));
const BrythonPage = React.lazy(() => import("./pages/brython"));
const VirusPage = React.lazy(() => import("./pages/virus"));

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
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <App />
      </Suspense>
    </Layout>
  </Router>
);

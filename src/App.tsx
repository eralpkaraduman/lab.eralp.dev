/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FunctionComponent, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layouts/default-layout";
import * as Paths from "./paths";

const HomePage = React.lazy(() => import("./pages/home"));
const NotFound = React.lazy(() => import("./pages/not-found"));
const BrythonPage = React.lazy(() => import("./pages/brython"));
const BoxPage = React.lazy(() => import("./pages/box"));
const Clock3DPage = React.lazy(() => import("./pages/clock-3d"));
const VirusPage = React.lazy(() => import("./pages/virus"));

const App: FunctionComponent = () => (
  <Layout>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={Paths.Brython} exact component={BrythonPage} />
        <Route path={Paths.Box} exact component={BoxPage} />
        <Route path={Paths.Virus} exact component={VirusPage} />
        <Route path={Paths.Clock3D} exact component={Clock3DPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export const AppWithoutRouter = App;

export default () => (
  <Router>
    <App />
  </Router>
);

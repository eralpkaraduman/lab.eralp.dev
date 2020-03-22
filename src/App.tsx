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
const Text3DPage = React.lazy(() => import("./pages/text-3d"));
const VirusPage = React.lazy(() => import("./pages/virus"));

const App: FunctionComponent = () => (
  <Layout>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={Paths.brython} exact component={BrythonPage} />
        <Route path={Paths.box} exact component={BoxPage} />
        <Route path={Paths.virus} exact component={VirusPage} />
        <Route path={Paths.text3D} exact component={Text3DPage} />
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

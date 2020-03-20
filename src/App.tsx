/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FunctionComponent, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layouts/default-layout";
import Paths from "./paths";

const HomePage = React.lazy(() => import("./pages/home"));
const BrythonPage = React.lazy(() => import("./pages/brython"));
const BoxPage = React.lazy(() => import("./pages/box"));
const VirusPage = React.lazy(() => import("./pages/virus"));

const App: FunctionComponent = () => (
  <Layout>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={Paths.brython}>
          <BrythonPage />
        </Route>
        <Route path={Paths.box}>
          <BoxPage />
        </Route>
        <Route path={Paths.virus}>
          <VirusPage />
        </Route>
        <Route path={Paths.home}>
          <HomePage />
        </Route>
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

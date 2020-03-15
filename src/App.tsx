import React from "react";
import { importMDX } from "mdx.macro";
import { withDefaultLayout } from "./layouts/default-layout";
const HomePage = withDefaultLayout(importMDX.sync("./pages/home-page.mdx"));

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;

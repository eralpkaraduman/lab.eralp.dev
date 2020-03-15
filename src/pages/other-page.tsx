/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import { withDefaultLayout } from "../layouts/default-layout";

const OtherPage: FunctionComponent = () => (
  <Fragment>
    <h1>Other Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere
      interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis
      sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae,
      consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt
      et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti.
      Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu
      suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue
      vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor
      magna condimentum vel, placerat id blandit sit amet tortor.
    </p>
    <p>
      Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem
      velit accumsan velit vel mattis libero nisl et sem. Proin interdum
      maecenas massa turpis sagittis in, interdum non lobortis vitae massa.
      Quisque purus lectus, posuere eget imperdiet nec sodales id arcu.
      Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.
    </p>
    <p>
      Nam molestie nec tortor. Donec placerat leo sit amet velit. Vestibulum id
      justo ut vitae massa. Proin in dolor mauris consequat aliquam. Donec
      ipsum, vestibulum ullamcorper venenatis augue. Aliquam tempus nisi in
      auctor vulputate, erat felis pellentesque augue nec, pellentesque lectus
      justo nec erat. Aliquam et nisl. Quisque sit amet dolor in justo pretium
      condimentum.
    </p>
  </Fragment>
);

export default withDefaultLayout(OtherPage);

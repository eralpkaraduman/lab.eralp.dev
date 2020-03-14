/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Link, Text } from "theme-ui";
import DefaultLayout from "../layouts/DefaultLayout";

type Props = {};

const HomePage: FunctionComponent<Props> = ({ children }) => (
  <DefaultLayout>
    <h1>Hi</h1>
    <Text>Some text</Text>
    <Text>
      Some text with a <Link href="/dsfgsdg">link</Link>
    </Text>
  </DefaultLayout>
);

export default HomePage;

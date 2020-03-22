import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { AppWithoutRouter } from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders title", async () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <AppWithoutRouter />
    </MemoryRouter>
  );
  const titleElement = getByText(/lab.eralp.dev/i);
  expect(titleElement).toBeInTheDocument();
  const homePageText = await waitForElement(() =>
    getByText(/This is where I put my experiments/i)
  );
  expect(homePageText).toBeInTheDocument();
});

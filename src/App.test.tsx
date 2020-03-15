import React from "react";
import { render } from "@testing-library/react";
import { AppWithoutRouter } from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders title", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <AppWithoutRouter />
    </MemoryRouter>
  );
  const titleElement = getByText(/WEB DDD/i);
  expect(titleElement).toBeInTheDocument();
});

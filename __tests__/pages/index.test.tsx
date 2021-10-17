import React from "react";
import Home from "../../pages/index";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  it("Render title", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Fitdash")).toBeInTheDocument();
  });
  it("Render sessions", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Session")).toBeInTheDocument();
  });
});

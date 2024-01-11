import React from "react";
import { render, screen } from "@testing-library/react";
import Sidenav from "./Sidenav";

test("renders learn react link", () => {
  render(<Sidenav />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./components/HeroSection/index";
import "@testing-library/jest-dom";
import ItemsCramerRule from "./pages/Items/ItemsLinear/ItemsCramerRule"
// it("renders <h> message", () => {
//   render(<HeroSection/>);
//   expect(screen.getByText("Numerrical you Know?")).toBeInTheDocument();
// });
// it("renders <p> message", () => {
//   render(<HeroSection/>);
//   expect(screen.getByText("Web Application from calculate function Numerical")).toBeInTheDocument();
// });
it("renders <p> message", () => {
  render(<ItemsCramerRule/>);
  expect(screen.getByText("size matrix")).toBeInTheDocument();
});
it("renders <p> message", () => {
  render(<ItemsCramerRule/>);
  expect(screen.getByText("Result")).toBeInTheDocument();
});

// it("renders <p> message", () => {
//   render(<Navbar/>);
//   expect(screen.getByText("Roots of Equations")).toBeInTheDocument();
// });
// it("renders <p> message", () => {
//   render(<Navbar/>);
//   expect(screen.getByText("Linear Algibar")).toBeInTheDocument();
// });
// it("renders <p> message", () => {
//   render(<Navbar/>);
//   expect(screen.getByText("Interpolation")).toBeInTheDocument();
// });
// it("renders <p> message", () => {
//   render(<Navbar/>);
//   expect(screen.getByText("Regression")).toBeInTheDocument();
// });
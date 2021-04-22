import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./components/HeroSection/index";
import "@testing-library/jest-dom";
import ItemsCramerRule from "./pages/Items/ItemsLinear/ItemsCramerRule"
import { Polynomial } from './services/service'
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

it('should get something', () => {
  const result = Polynomial([[10, 5], [15, 9], [20, 15], [30, 18], [40, 22], 
    [50, 30], [60, 35], [70, 38], [80, 43]],25,2)
  // Assertion
  expect(result).toEqual([-0.00184314, 0.69152941, -0.70098039])
})



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
import { fireEvent, render, screen } from "@testing-library/react";
import { Carousel } from "./Carousel";

// describe("Carousel component", () => {
//   test("it should render carousel component", () => {
//     render(<Carousel />);
//     const element = screen.getByRole("listbox", { name: "Carousel" });
//     expect(element).toBeInTheDocument();
//   });

//   test("it should render next slide when user click right arrow button", () => {
//     render(<Carousel />);
//     const rightArrowButton = screen.getByRole("button", {
//       name: "arrow_forward_ios",
//     });

//     fireEvent.click(rightArrowButton);
//     const element = screen.getByRole("option", {
//       name: "Digital NSW Digital NSW Find out more",
//     });
//     expect(element).toBeInTheDocument();
//   });

//   test("it should render previous slide when user click the left arrow button", () => {
//     render(<Carousel />);
//     const leftArrowButton = screen.getByRole("button", {
//       name: "arrow_back_ios",
//     });

//     fireEvent.click(leftArrowButton);
//     const element = screen.getByRole("option", {
//       name: "Bringing your digital identity to life Bringing your digital identity to life Find out more",
//     });
//     expect(element).toBeInTheDocument();
//   });
// });

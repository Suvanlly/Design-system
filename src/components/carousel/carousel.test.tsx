import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Carousel } from "./Carousel";
import items from './json/carousel-items.json'

describe("Carousel component", () => {
  describe('Component Rendering', () => {
    test("it should render carousel component", () => {
      render(<Carousel carouselItems={items} />);
  
      const element = screen.getByRole("listbox", { name: "Carousel" });
      expect(element).toBeInTheDocument();
    });
  
    test('it should render carousel indicators', () => {
      render(<Carousel carouselItems={items} />);
  
      for (let i = 1; i < items.length; i ++) {
        const element = screen.getByRole("button", { name: `carousel indicator ${i}` })
        expect(element).toBeInTheDocument();
      }
    })
  
    test('it should render play/pause auto play button', () => {
      render(<Carousel carouselItems={items}  />);
  
      const element = screen.getByRole("button", {name: "enable auto play"})
      expect(element).toBeInTheDocument();
    })
  
    test('it should render back to previous slide and go to next side arrow buttons', () => {
      render(<Carousel carouselItems={items}  />);
  
      const backToPreviousSlideButton = screen.getByRole("button", {name: "back to last slide"})
      const goToNextSlideButton = screen.getByRole("button", {name: "go to next slide"})
      expect(backToPreviousSlideButton).toBeInTheDocument();
      expect(goToNextSlideButton).toBeInTheDocument();
    })
  
    test("it should render next slide when user click right arrow button", () => {
      render(<Carousel carouselItems={items} />);
      const rightArrowButton = screen.getByRole("button", {
        name: "go to next slide",
      });
  
      fireEvent.click(rightArrowButton);
      const element = screen.getByRole("option", {
        name: "Welcome to Digital NSW Welcome to Digital NSW More Information",
      });
      expect(element).toBeInTheDocument();
    });
  
    test("it should render previous slide when user click the left arrow button", () => {
      render(<Carousel carouselItems={items} />);
      const leftArrowButton = screen.getByRole("button", {
        name: "back to last slide",
      });
  
      fireEvent.click(leftArrowButton);
      const element = screen.getByRole("option", {
        name: "Bringing digital to life Bringing digital to life View details",
      });
      expect(element).toBeInTheDocument();
    });
  })

  // describe('Accessibility', () => {
  //   test('it should back to previous slide, when user focus on back to previous slide button and type space key', async () => {
  //     render(<Carousel carouselItems={items} />);
  //     const leftArrowButton = screen.getByRole("button", {
  //       name: "back to last slide",
  //     });
  //     fireEvent.focus(leftArrowButton);
  //     fireEvent.keyDown(leftArrowButton, {key: 'Space', code: 'Space', charCode: 32})
  //     await waitFor(() => {
  //       const element = screen.getByRole("option", {
  //         name: "Bringing digital to life Bringing digital to life View details",
  //       });
  //       expect(element).toBeVisible();
  //     });
  //   })
  // })
});

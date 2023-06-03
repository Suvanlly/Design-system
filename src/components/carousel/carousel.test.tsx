import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from './Carousel';


describe('Carousel component', () => {
  test('renders the first page when open the application', () => {
    render(<Carousel />)
    const testElement = screen.getByText("Building a stronger and safer digital society");
    expect(testElement).toBeInTheDocument();
  });

  test('renders the next page when user click the right arrow button', () => {
    render(<Carousel />);
    const rightArrowButton = screen.getByText('arrow_forward_ios');

    fireEvent.click(rightArrowButton);
    const nextPageText = screen.getByText("Digital NSW");
    expect(nextPageText).toBeInTheDocument();
  });


  test('renders the previous page when user click the left arrow button', () => {
    render(<Carousel />);
    const leftArrowButton = screen.getByText('arrow_back_ios');

    fireEvent.click(leftArrowButton);
    const previousPageText = screen.getByText("Bringing your digital identity to life");
    expect(previousPageText).toBeInTheDocument();
  });

  // test('renders the first image when user reach the final page and click the right arrow button', () => {

  // });
})

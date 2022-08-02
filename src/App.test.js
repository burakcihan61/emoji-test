import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./Header";

test("it click on emoji  must be copied", () => {
  render(<App />);
  const clicks = screen.getAllByTestId("row");
  expect(clicks[0]).toHaveAttribute("data-clipboard-text");
});

test("Emoji list must be rendered successfully", () => {
  render(<App />);
  const items = screen.getAllByTestId("row");
  expect(items.length).toEqual(20);
});

test("Header rendering", () => {
  render(<Header />);
  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeInTheDocument();
});
test("Emoji list must be rendered while filtering", () => {
  render(<App />);
  const inputText = screen.getByText("1234");
  expect(inputText).toBeInTheDocument("1234");
});

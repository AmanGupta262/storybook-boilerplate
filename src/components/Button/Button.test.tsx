import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from ".";

afterEach(() => {
  cleanup();
});

test("should render button component", () => {
  render(<Button />);
  const btn = screen.getByTestId("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Button");
});

test("should render button with label", () => {
  render(<Button label="Click me" />);
  const btn = screen.getByTestId("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Click me");
});

test("should render disabled button", () => {
  render(<Button disabled={true} />);
  const btn = screen.getByTestId("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toBeDisabled();
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Content", () => {
  it('should check for "Learn & Master GitHub Actions"', () => {
    render(<App />);
    expect(
      screen.getByText("Learn & Master GitHub Actions")
    ).toBeInTheDocument();
  });
});

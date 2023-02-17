import Home from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("로고가 렌더되는가", () => {
  render(<Home />);
  const Logo = screen.getByAltText("logo");
  expect(Logo);
});

import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";

it("Renders the Search box", () => {
  const component = renderer.create(<Search />);
  expect(component).toMatchSnapshot();
});

it("Renders the search box a different way", () => {
  const { container } = render(<Search />);
  expect(container).toMatchSnapshot();
});

it("Handles input", () => {
  const handleSearch = jest.fn();

  const { getByTestId } = render(<Search handleSearch={handleSearch} />);
  const textInput = getByTestId("text-input");
  fireEvent.change(textInput, { target: { value: "London" } });

  const submitButton = getByTestId("submit-button");
  fireEvent.click(submitButton);

  expect(handleSearch).toHaveBeenCalled();
  expect(handleSearch).toHaveBeenCalledTimes(1);
  expect(handleSearch).toHaveBeenCalledWith("London");
});

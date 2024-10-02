import renderer from "react-test-renderer";
import Header from "./Header";

it("Renders the header", () => {
  const component = renderer.create(<Header />);
  expect(component).toMatchSnapshot();
});

import renderer from "react-test-renderer";
import App from "./App";

it("Renders the App", () => {
  const component = renderer.create(<App />);
  expect(component).toMatchSnapshot();
});

import renderer from "react-test-renderer";
import Footer from "./Footer";

it("Renders the footer", () => {
  const component = renderer.create(<Footer />);
  expect(component).toMatchSnapshot();
});

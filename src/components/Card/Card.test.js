import renderer from "react-test-renderer";
import Card from "./Card";

it("Renders the Card", () => {
  const day = {
    date: "2024-06-26",
    dayOfWeek: "Wednesday",
    condition: 3,
    temperatureMax: 29,
    temperatureMin: 16,
    windSpeed: 12,
  };
  const component = renderer.create(<Card day={day} />);
  expect(component).toMatchSnapshot();
});

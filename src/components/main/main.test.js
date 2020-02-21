import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main placesCount={2} places={[`city-1`, `city-2`, `city-3`]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

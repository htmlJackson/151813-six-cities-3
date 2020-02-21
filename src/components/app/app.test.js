import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App placesCount={3} places={[`city-1`, `city-2`, `city-3`]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

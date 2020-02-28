import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";

it(`Render Main`, () => {
  const mocOffers = [
    {
      type: `type-1`,
      name: `name-1`,
      price: 111,
      picSrc: `str-1.jpg`,
      stars: 1,
      isPremium: true,
      isBookmarked: false
    },
    {
      type: `type-2`,
      name: `name-2`,
      price: 222,
      picSrc: `str-2.jpg`,
      stars: 2,
      isPremium: true,
      isBookmarked: true
    },
    {
      type: `type-3`,
      name: `name-3`,
      price: 333,
      picSrc: `str-3.jpg`,
      stars: 3,
      isPremium: false,
      isBookmarked: false
    },
  ];

  const tree = renderer
    .create(<Main placesCount={2} offers={mocOffers} onNameClick={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

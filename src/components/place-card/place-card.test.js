import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";

it(`Render PlaceCard`, () => {
  const mocCardOffer = {
    type: `type-1`,
    name: `name-1`,
    price: 111,
    picSrc: `str-1.jpg`,
    stars: 1,
    isPremium: true,
    isBookmarked: false
  };

  const tree = renderer
    .create(<PlaceCard offer={mocCardOffer} onPlaceCardHover={jest.fn()} onPlaceCardNameClick={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

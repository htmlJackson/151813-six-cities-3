import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card be hovered with info`, () => {
  const mocCardOffer = {
    type: `type-1`,
    name: `name-1`,
    price: 111,
    picSrc: `str-1.jpg`,
    stars: 1,
    isPremium: true,
    isBookmarked: false
  };

  const onPlaceCardHover = jest.fn();

  const placeCardComponent = shallow(
      <PlaceCard placesCount={4} offer={mocCardOffer} onPlaceCardHover={onPlaceCardHover} onPlaceCardNameClick={jest.fn()} />
  );

  placeCardComponent.simulate(`mouseover`);

  expect(onPlaceCardHover).toBeCalledWith(expect.any(Object));
});

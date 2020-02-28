import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should name anchor be clicked`, () => {
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

  const onNameClick = jest.fn();

  const mainComponent = mount(
      <Main placesCount={4} offers={mocOffers} onNameClick={onNameClick} />
  );

  const nameAnchor = mainComponent.find(`.place-card__name a`).first();

  nameAnchor.simulate(`click`);

  expect(onNameClick).toHaveBeenCalledTimes(1);
});

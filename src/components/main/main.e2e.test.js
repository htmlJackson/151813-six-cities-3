import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should name anchor be clicked`, () => {
  const onNameClick = jest.fn();

  const mainComponent = shallow(
      <Main placesCount={4} places={[`city-1`, `city-2`, `city-3`]} onNameClick={onNameClick} />
  );

  const nameAnchor = mainComponent.find(`.place-card__name a`).first();

  nameAnchor.simulate(`click`);

  expect(onNameClick).toHaveBeenCalledTimes(1);
});

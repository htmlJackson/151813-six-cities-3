
import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app.jsx";

import offers from "./mocks/offers.js";

const placesCount = 132;

const places = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Beautiful & luxurious apartment at great location`, `Wood and stone place`];

ReactDOM.render(
    <App placesCount={placesCount} places={places} offers={offers} />,
    document.getElementById(`root`)
);

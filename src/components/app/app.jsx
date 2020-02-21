import React from "react";
import PropTypes from "prop-types";

import {Main} from "../main/main.jsx";

const onNameClick = () => true;

const App = (props) => {
  return <Main placesCount={props.placesCount} places={props.places} onNameClick={onNameClick} />;
};

App.propTypes = {
  places: PropTypes.array.isRequired,
  placesCount: PropTypes.number.isRequired,
};

export {App};

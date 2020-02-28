import React from "react";
import PropTypes from "prop-types";

import {Main} from "../main/main.jsx";

const onNameClick = () => true;

const App = ({placesCount, offers}) => {
  return <Main placesCount={placesCount} offers={offers} onNameClick={onNameClick} />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
};

export {App};

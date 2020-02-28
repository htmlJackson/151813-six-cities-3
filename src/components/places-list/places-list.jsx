import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {PlaceCard} from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPlaceCard: null,
    };

    this._handlePlaceCardHover = this._handlePlaceCardHover.bind(this);
  }

  _handlePlaceCardHover(hoveredCard) {
    return () => {
      this.setState(() => {
        return {currentPlaceCard: hoveredCard};
      });
    };
  }

  render() {
    const {offers, onNameClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) => {
          return (
            <PlaceCard offer={offer} key={`place-card-` + index} onPlaceCardHover={this._handlePlaceCardHover} onPlaceCardNameClick={onNameClick} />
          );
        })}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  onNameClick: PropTypes.func.isRequired,
};


export {PlacesList};

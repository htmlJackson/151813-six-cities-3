import React from "react";
import PropTypes from "prop-types";

const PlaceCard = ({offer, onPlaceCardHover, onPlaceCardNameClick}) => {
  const {type, name, price, picSrc, stars, isPremium, isBookmarked} = offer;
  return (
    <article className="cities__place-card place-card" onMouseEnter={onPlaceCardHover(offer)}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={picSrc} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isBookmarked ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `calc(20% * ${stars})`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onPlaceCardNameClick}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.exact({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picSrc: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  }),
  onPlaceCardHover: PropTypes.func.isRequired,
  onPlaceCardNameClick: PropTypes.func.isRequired,
};

export {PlaceCard};

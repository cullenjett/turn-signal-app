import React from "react";
import ListingDecorator from './listing.decorator';
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  listing = new ListingDecorator(listing);

  return (
    <div className="ListingCard">
      <a href="#">
        <img
          src={listing.thumbnailUrl}
          className="ListingCard__img img img-responsive"
          alt="car"
        />
        <div className="ListingCard__details">
          <h3 className="ListingCard__title">{listing.headline}</h3>
          <div>
            <span className="ListingCard__price">
              {listing.askingPrice} or <span className="blue-text">{listing.monthlyPayment}/mo*</span>
            </span>
            <span className="ListingCard__miles">{listing.miles} mi</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ListingCard;

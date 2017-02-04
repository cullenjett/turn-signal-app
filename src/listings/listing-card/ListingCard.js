import React from "react";
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  return (
    <div className="ListingCard">
      <a href="#">
        <img
          src="http://placehold.it/400x300"
          className="ListingCard__img img img-responsive"
          alt="car"
        />
        <div className="ListingCard__details">
          <h3 className="ListingCard__title">{listing.title}</h3>
          <div>
            <span className="ListingCard__price">
              {listing.price} or <span className="blue-text">$100/mo*</span>
            </span>
            <span className="ListingCard__miles">{listing.miles} mi</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ListingCard;

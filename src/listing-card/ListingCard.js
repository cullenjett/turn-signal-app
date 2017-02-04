import React from 'react';
import './ListingCard.css';

const ListingCard = () => {
  return (
    <div className="ListingCard">
      <img src="http://placehold.it/400x300" className="img img-responsive" />
      <div className="ListingCard__details">
        <h3 className="ListingCard__title">2010 Ford Focus</h3>
        <div>
          <span className="ListingCard__price">$4,900 or $100/mo*</span>
          <span className="ListingCard__miles">112,200 mi</span>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
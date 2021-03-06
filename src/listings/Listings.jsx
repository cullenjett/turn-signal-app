import React from "react";
import ListingCard from "./listing-card/ListingCard";
import './Listings.css';

const renderListingCards = listings => {
  return listings.map(listing => {
    return (
      <div className="col-md-4 col-sm-6" key={listing.id}>
        <ListingCard listing={listing} />
      </div>
    );
  });
};

const Listings = ({ listings }) => {
  return (
    <div className="Listings">
      <div className="row row--flex">
        {renderListingCards(listings)}
      </div>
    </div>
  );
};

export default Listings;

import React from "react";
import ListingCard from "./listing-card/ListingCard";

const renderListingCards = listings => {
  return listings.map(listing => {
    return (
      <div className="col-md-4" key={listing.id}>
        <ListingCard listing={listing} />
      </div>
    );
  });
};

const Listings = ({ listings }) => {
  return (
    <div className="Listings">
      <div className="row">
        {renderListingCards(listings)}
      </div>
    </div>
  );
};

export default Listings;

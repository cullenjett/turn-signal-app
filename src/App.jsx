import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import Listings from './listings/Listings';
import ListingModel from './listings/listing.model';
import './App.css';

const listingData = [
  {
    id: 1,
    title: '2010 Ford Focus',
    price: '$4,900',
    miles: '112,200'
  },
  {
    id: 2,
    title: '2011 Mercedes-Benz GL Class',
    price: '$21,500',
    miles: '111,696'
  },
  {
    id: 3,
    title: '2016 Jeep Renegade',
    price: '$21,500',
    miles: '18,500'
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    ListingModel.page(1).then(listings => this.setState({ listings }))
  }

  render() {
    const { listings } = this.state;

    return (
      <div className="App">
        <AppHeader />

        <section className="App__body container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-4"></div>
            <div className="col-md-9 col-sm-8">
              <Listings listings={listings} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

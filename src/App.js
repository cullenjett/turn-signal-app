import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import Listings from './listings/Listings';
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
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        
        <section className="App__body container-fluid">
          <Listings listings={listingData} />
        </section>
      </div>
    );
  }
}

export default App;

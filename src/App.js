import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import ListingCard from './listing-card/ListingCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ListingCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

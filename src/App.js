import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import ListingCard from './listing-card/ListingCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <section className="App__body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <ListingCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

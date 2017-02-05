import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import Listings from './listings/Listings';
import ListingModel from './listings/listing.model';
import FilterList from './filter-list/FilterList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      listings: [],
      page: 1,
      search: {
        min_price: 0,
        max_price: 105000,
        min_year: 1981,
        max_year: 2016,
        min_mileage: 0,
        max_mileage: 280000
      }
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const { page, search } = this.state;

    ListingModel.where({
      page,
      search
    }).then(listings => this.setState({ listings }));
  }

  handleFilterChange(filterName, values) {
    let minFilterName = `min_${filterName}`;
    let maxFilterName = `max_${filterName}`;
    let minFilterValue = values[0];
    let maxFilterValue = values[1];

    ListingModel.where({
      page: 1,
      search: {
        [minFilterName]: minFilterValue,
        [maxFilterName]: maxFilterValue
      }
    }).then(listings => this.setState({ listings }));
  }

  render() {
    const { listings } = this.state;

    return (
      <div className="App">
        <AppHeader />

        <section className="App__body container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <FilterList onChange={this.handleFilterChange}/>
            </div>

            <div className="col-lg-10 col-md-9 col-sm-8">
              <Listings listings={listings} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import FilterList from './filter-list/FilterList';
import ResultSummary from './ResultSummary';
import Listings from './listings/Listings';
import ListingModel from './listings/listing.model';
import Spinner from './spinner/Spinner';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
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
    }).then(listings => this.setState({ isLoading: false, listings }));
  }

  handleFilterChange(filterName, values) {
    const minFilterName = `min_${filterName}`;
    const maxFilterName = `max_${filterName}`;

    const nextSearch = Object.assign({}, this.state.search, {
      [minFilterName]: values[0],
      [maxFilterName]: values[1]
    });

    this.setState({
      isLoading: true,
      search: nextSearch
    }, () => {
      ListingModel.where({
        page: this.state.page,
        search: this.state.search
      }).then(listings => this.setState({ isLoading: false, listings }));
    });
  }

  render() {
    const { listings } = this.state;

    return (
      <div className="App">
        <AppHeader />

        <section className="container-fluid">
          <div className="row row--flex">
            <div className="col-lg-2 col-md-3 col-sm-4" style={{paddingRight: 0}}>
              <FilterList onChange={this.handleFilterChange}/>
            </div>

            <div className="col-lg-10 col-md-9 col-sm-8" style={{paddingLeft: 0}}>
              <ResultSummary />
              <Spinner isLoading={this.state.isLoading}>
                <Listings listings={listings} />
              </Spinner>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

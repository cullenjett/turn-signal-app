import React, { Component } from "react";
import Filter from "./filter/Filter";
import "./FilterList.css";

class FilterList extends Component {
  constructor() {
    super();
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filterName, values) {
    this.props.onChange(filterName, values);
  }

  render() {
    return (
      <div className="FilterList">
        <Filter
          label="Price"
          minValue={0}
          maxValue={105000}
          step={5000}
          onAfterChange={this.handleFilterChange}
        />
        <Filter
          label="Year"
          minValue={1986}
          maxValue={2016}
          step={1}
          onAfterChange={this.handleFilterChange}
        />
        <Filter
          label="Mileage"
          minValue={10000}
          maxValue={200000}
          step={5000}
          onAfterChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

export default FilterList;

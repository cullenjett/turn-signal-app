import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';

class Filter extends Component {
  constructor() {
    super();
    
    this.state = {
      min: 0,
      max: 100
    };

    this.setOutputValues = this.setOutputValues.bind(this);
  }

  setOutputValues(values) {
    this.setState(prevState => {
      return {
        min: values[0],
        max: values[1]
      };
    });
  }

  handleFilterChange(e) {
    console.log(e);
  }

  render() {
    const { min, max } = this.state;

    return (
      <div className="Filter">
        <p className="Filter__label">Price</p>
        <p className="Filter__output-container">
          <span className="Filter__output">{min}</span>
          <span className="Filter__output">{max}</span>
        </p>
        <Range
          className="Filter__range"
          min={0}
          max={100}
          defaultValue={[0,100]}
          allowCross={false}
          onChange={this.setOutputValues}
          onAfterChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

export default Filter;
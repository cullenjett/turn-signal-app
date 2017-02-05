import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minLabel: props.minValue,
      maxLabel: props.maxValue
    };

    this.setOutputLabels = this.setOutputLabels.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  setOutputLabels(values) {
    this.setState(prevState => {
      return {
        minLabel: values[0],
        maxLabel: values[1]
      };
    });
  }

  handleFilterChange(values) {
    const filterName = this.props.label.toLowerCase();
    this.props.onAfterChange(filterName, values);
  }

  render() {
    const { label, minValue, maxValue, step } = this.props;
    const { minLabel, maxLabel } = this.state;

    return (
      <div className="Filter">
        <p className="Filter__label">{label}</p>
        <p className="Filter__output-container">
          <span className="Filter__output">{minLabel}</span>
          <span className="Filter__output">{maxLabel}</span>
        </p>
        <Range
          className="Filter__range"
          min={minValue}
          max={maxValue}
          defaultValue={[minValue, maxValue]}
          step={step}
          allowCross={false}
          onChange={this.setOutputLabels}
          onAfterChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

export default Filter;
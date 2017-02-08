import React from 'react';
import './Spinner.css';

const Spinner = ({ isLoading, children }) => {
  let spinnerWrapperClass = "hidden";
  if (isLoading) {
    spinnerWrapperClass = "";
  }

  return (
    <div>
      <div className={spinnerWrapperClass}>
        <div className="Spinner__overlay"></div>
        <div className="Spinner"></div>
      </div>
      {children}
    </div>
  )
};

export default Spinner;
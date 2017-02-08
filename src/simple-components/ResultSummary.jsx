import React from "react";

const ResultSummary = ({ numberFound, withinRange }) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <p
          style={{
            color: "#2B3642",
            fontWeight: 500,
            padding: "2rem",
            margin: 0,
            borderRight: "2px solid #E5E8EB",
            borderBottom: "2px solid #E5E8EB",
            borderLeft: "2px solid #E5E8EB"
          }}
        >
          {numberFound} cars within {withinRange} miles
        </p>
      </div>
    </div>
  );
};

export default ResultSummary;

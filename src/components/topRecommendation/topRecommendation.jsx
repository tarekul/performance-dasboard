import React from "react";
import "./topRecommendation.css";

const TopRecommendation = ({ recommendation }) => (
  <div className="topRecCard">
    <h2>💡 Top Recommendation: Focus on {recommendation.factor}</h2>
    <p>{recommendation.message}</p>
    <div>
      <span>
        +{recommendation.potential_gain.toFixed(2)} Potential Productivity
      </span>
      <button>View Action Plan →</button>
    </div>
  </div>
);

export default TopRecommendation;

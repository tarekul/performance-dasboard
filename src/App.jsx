import React from "react";
import "./App.css";

import ActionPlan from "./components/actionPlan/actionPlan";
import CorrelationsList from "./components/correlationsList/correlationsList";
import Header from "./components/header/header";
import TimeSeriesChart from "./components/timeseries/timeSeries";
import TopRecommendation from "./components/topRecommendation/topRecommendation";

import U022_DATA from "./data/U022.json";

// --- 4. MAIN APP COMPONENT ---
export default function App() {
  const data = U022_DATA;

  return (
    <div className="dashboard">
      <div className="container">
        {/* 1. Header and Summary Stats */}
        <Header
          summary={data.summary}
          userId={data.user_id}
          daysLogged={data.days_logged}
        />

        {/* 2. Main Content: Recommendation, Chart, and Side Panel */}
        <div className="mainLayout">
          {/* Left Column (2/3 width) */}
          <div>
            <TopRecommendation recommendation={data.top_recommendation} />
            <TimeSeriesChart data={data.time_series} />
          </div>

          {/* Right Column (1/3 width) */}
          <aside>
            <CorrelationsList
              boosters={data.boosters}
              drainers={data.drainers}
            />
          </aside>
        </div>

        {/* 3. Action Plan (Full width) */}
        <ActionPlan plan={data.action_plan} />
      </div>
    </div>
  );
}

import React from "react";
import "./header.css";

const Header = ({ userId, daysLogged, summary }) => {
  const summaryData = [
    {
      name: "Avg Productivity",
      value: summary.avg_productivity,
      color: "#007bff",
    },
    { name: "Avg Mood", value: summary.avg_mood, color: "#ffc107" },
    { name: "Avg Sleep (hrs)", value: summary.avg_sleep, color: "#17a2b8" },
    { name: "Avg Stress", value: summary.avg_stress, color: "#dc3545" },
  ];

  return (
    <div>
      {/* User Info */}
      <div className="header">
        <h1>
          Performance Dashboard{" "}
          <span style={{ color: "#007bff" }}>{userId}</span>
        </h1>
        <p style={{ color: "#6c757d" }}>
          Data Logged: {daysLogged} days (June 2023)
        </p>
      </div>

      {/* Summary Stat Grid */}
      <div className="summaryGrid">
        {summaryData.map((item) => (
          <div
            key={item.name}
            className="summaryItem"
            style={{
              borderBottom: `4px solid ${item.color}`,
            }}
          >
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: item.color,
              }}
            >
              {item.value}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#6c757d" }}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

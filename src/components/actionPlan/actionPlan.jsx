import "./actionPlan.css";

const ActionPlan = ({ plan }) => (
  <div className="card">
    <h2
      style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "20px" }}
    >
      🎯 Personalized Action Plan
    </h2>
    <div className="actionPlanGrid">
      {plan.map((item) => (
        <div
          key={item.priority}
          style={{
            border: "1px solid #e0e6ed",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#007bff",
              marginBottom: "10px",
            }}
          >
            Priority {item.priority}: {item.factor}
          </h3>
          <p
            style={{
              color: "#6c757d",
              marginBottom: "15px",
              fontStyle: "italic",
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
            }}
          >
            Success Metric: {item.success_metric}
          </p>
          <ul style={{ paddingLeft: "0" }}>
            {item.daily_actions.map((action, index) => (
              <li key={index} className="actionItem">
                ✅ {action}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default ActionPlan;

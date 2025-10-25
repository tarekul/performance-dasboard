import "./correlationItem.css";

const CorrelationItem = ({ factor, correlation, emoji, isBooster }) => {
  const color = isBooster ? "#28a745" : "#dc3545";
  return (
    <div className="correlationItem">
      <span
        style={{ display: "flex", alignItems: "center", fontWeight: "500" }}
      >
        <span style={{ marginRight: "8px", fontSize: "1.2rem" }}>{emoji}</span>{" "}
        {factor}
      </span>
      <span style={{ color: color, fontWeight: "bold" }}>
        {correlation.toFixed(2)}
      </span>
    </div>
  );
};

export default CorrelationItem;

import CorrelationItem from "../correlationItem/correlationItem";

const CorrelationsList = ({ boosters, drainers }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    {/* Boosters Section */}
    <div className="card boosterCard">
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#28a745",
          marginBottom: "10px",
        }}
      >
        ✨ Top Boosters
      </h3>
      <div style={{ padding: "0 10px" }}>
        {boosters.map((item, index) => (
          <CorrelationItem key={index} {...item} isBooster={true} />
        ))}
      </div>
    </div>

    {/* Drainers Section */}
    <div className="card drainerCard">
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#dc3545",
          marginBottom: "10px",
        }}
      >
        ⚠️ Top Drainers
      </h3>
      <div style={{ padding: "0 10px" }}>
        {drainers.map((item, index) => (
          <CorrelationItem key={index} {...item} isBooster={false} />
        ))}
      </div>
    </div>
  </div>
);

export default CorrelationsList;

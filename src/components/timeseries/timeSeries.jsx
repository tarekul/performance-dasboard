import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TimeSeriesChart = ({ data }) => (
  <div className="card">
    <h2
      style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "15px" }}
    >
      Mood & Productivity Over Time (Scale 1-10)
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="date" stroke="#666" />
        <YAxis domain={[0, 10]} stroke="#666" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <Line
          type="monotone"
          dataKey="mood"
          stroke="#ffc107"
          strokeWidth={2}
          name="Mood"
        />
        <Line
          type="monotone"
          dataKey="productivity"
          stroke="#007bff"
          strokeWidth={2}
          name="Productivity"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default TimeSeriesChart;

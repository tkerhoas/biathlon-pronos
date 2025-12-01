export default function AthleteCard({ athlete }) {
  return (
    <div className="card" style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ fontWeight: 700 }}>{athlete.name}</div>
      <div style={{ fontSize: 12, color: "#666" }}>{athlete.nation}</div>
    </div>
  )
}

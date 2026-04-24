import "./Admission.css";
import { PieChart, Pie, Cell } from "recharts";
import { useState, useRef } from "react";

const data = [
  {
    name: "MANAGEMENT",
    value: 25,
    color: "#f97316",
    darkColor: "#ea580c",
    lightColor: "#fb923c",
    title: "MANAGEMENT QUOTA",
    desc: "Direct admission — 25% of seats",
  },
  {
    name: "COMEDK",
    value: 30,
    color: "#3ce031",
    darkColor: "#3ce031",
    lightColor: "#3ce031",
    title: "COMEDK QUOTA",
    desc: "All-India entrance — 30% of seats",
  },
  {
    name: "KCET",
    value: 45,
    color: "#1d4ed8",
    darkColor: "#1e40af",
    lightColor: "#3b82f6",
    title: "KCET / KEA QUOTA",
    desc: "Karnataka government quota — 45% of seats",
  },
];

/*
  Label fix:
  - Use a single midpoint radius that stays well inside the arc
  - No dy offset — anchor text directly at (x, y) with dominantBaseline="central"
  - Shadow offset is small (0.8px) so it never pushes the % outside
*/
const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RAD = Math.PI / 180;
  // 0.55 keeps the label centred in the visible band of the arc for all slice sizes
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RAD);
  const y = cy + radius * Math.sin(-midAngle * RAD);
  const label = `${Math.round(percent * 100)}%`;

  return (
    <g style={{ pointerEvents: "none" }}>
      {/* Drop-shadow copy */}
      <text
        x={x + 0.8}
        y={y + 0.8}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={13}
        fontWeight="800"
        fill="rgba(0,0,0,0.18)"
      >
        {label}
      </text>
      {/* Main label */}
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={13}
        fontWeight="800"
        fill="#ffffff"
      >
        {label}
      </text>
    </g>
  );
};

function Admission() {
  const [activeIndex, setActiveIndex] = useState(null);
  const chartRef = useRef(null);

  return (
    <section className="admission">
      <div className="container">
        <div className="admission-header">
          <h2>ADMISSION</h2>
          <p className="subtitle">
            RVCE has three types of admission quotas under a formal seat-sharing
            agreement.
          </p>
        </div>

        <div className="admission-content">
          {/* LEFT */}
          <div className="left-chart">
            <h3>B.E SEAT DISTRIBUTION IN RVCE</h3>
            <p className="sub">Interactive — hover or tap any slice</p>

            <div className="chart-wrapper" ref={chartRef}>
              <svg className="chart-filter-defs">
                <defs>
                  <filter
                    id="shadow3d"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="2"
                      dy="4"
                      stdDeviation="3"
                      floodOpacity="0.15"
                    />
                  </filter>
                </defs>
              </svg>

              <PieChart width={320} height={320}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  labelLine={false}
                  label={renderLabel}
                  /* Disable Recharts' entry animation so labels show immediately */
                  isAnimationActive={false}
                  onMouseEnter={(_, i) => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        activeIndex === index ? entry.lightColor : entry.color
                      }
                      stroke="#ffffff"
                      strokeWidth={6}
                      style={{
                        filter: "url(#shadow3d)",
                        transform:
                          activeIndex === index ? "scale(1.05)" : "scale(1)",
                        transformOrigin: "center",
                        transition:
                          "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>

              {/* CENTER */}
              <div
                className={`center-circle ${activeIndex !== null ? "active" : ""}`}
              >
                <span>B.E SEATS</span>
                <strong>RVCE</strong>
              </div>
            </div>

            <p className="hint">✨ Hover any slice to see 3D effect</p>

            {/* LEGEND */}
            <div className="legend">
              {data.map((item, i) => (
                <div
                  key={i}
                  className={`legend-item ${activeIndex === i ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <span
                    className="dot"
                    style={{ background: item.color }}
                  ></span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-cards">
            {data.map((item, i) => (
              <div
                key={i}
                className={`quota-card ${activeIndex === i ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="percent-wrapper">
                  <div className="percent" style={{ color: "#ffffff" }}>
                    {item.value}%
                  </div>
                </div>

                <div className="quota-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admission;

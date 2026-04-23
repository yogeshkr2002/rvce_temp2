import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState } from "react";

const data = [
  { name: "MGMT", value: 25, color: "#f97316" },
  { name: "COMEDK", value: 30, color: "#ea580c" },
  { name: "KCET", value: 45, color: "#2563eb" },
];

function PieChartComponent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <PieChart width={260} height={260}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        paddingAngle={3}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={entry.color}
            stroke="#ffffff"
            strokeWidth={2}
            style={{
              transform: activeIndex === index ? "scale(1.08)" : "scale(1)",
              transformOrigin: "center",
              transition: "0.2s ease",
            }}
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
}

export default PieChartComponent;

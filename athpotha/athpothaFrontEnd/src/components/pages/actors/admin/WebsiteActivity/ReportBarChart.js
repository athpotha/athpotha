// import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts";

const data = [
  {
    name: "Monday",
    // NewUsers: 590,
    // Visits: 800,
    // income: 140,
    reports: 23
  },
  {
    name: "Tuesday",
    reports: 12
  },
  {
    name: "Wednesday",
    
    reports: 17
  },
  {
    name: "Thursday",
    
    reports: 20
  },
  {
    name: "Friday",
    
    reports: 5
  },
  {
    name: "Saturday",
    
    reports: 2
  },
  {
    name: "Sunday",
    
    reports: 15
  }
];

export default function App() {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Area type="monotone" dataKey="Visits" fill="#8884d8" stroke="#8884d8" /> */}
      <Bar dataKey="reports" barSize={20} fill="#787FF6" />
      {/* <Line type="monotone" dataKey="income" stroke="#ff7300" />
      <Scatter dataKey="reports" fill="red" /> */}
    </ComposedChart>
  );
}

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
    income: 140,
  },
  {
    name: "Tuesday",
    income: 1506,
  },
  {
    name: "Wednesday",
    income: 989,
  },
  {
    name: "Thursday",
    income: 1228,
  },
  {
    name: "Friday",
    income: 1100,
  },
  {
    name: "Saturday",
    income: 1700,
  },
  {
    name: "Sunday",
    income: 1700,
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
      <Bar dataKey="income" barSize={20} fill="#4ADEDE" />
      {/* <Line type="monotone" dataKey="income" stroke="#ff7300" />
      <Scatter dataKey="reports" fill="red" /> */}
    </ComposedChart>
  );
}

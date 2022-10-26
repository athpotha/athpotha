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
    totalUsers: 4,
    newUsers: 0,
    income: 1400,
    report: 4
  },
  {
    name: "Tuesday",
    totalUsers: 4,
    newUsers: 1,
    income: 1400,
    report: 4
  },
  {
    name: "Wednesday",
    totalUsers: 5,
    newUsers: 3,
    income: 1400,
    report: 4
  },
  {
      name: "Thursday",
      totalUsers: 8,
      newUsers: 3,
      income: 2312,
      report: 4
    },
    {
      name: "Friday",
      totalUsers: 10,
      newUsers: 0,
      income: 3000,
      report: 3
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
      <Area type="monotone" dataKey="totalUsers" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="newUsers" barSize={100} fill="#413ea0" />
      <Line type="monotone" dataKey="income" stroke="#ff7300" />
      <Scatter dataKey="report" fill="red" />
    </ComposedChart>
  );
}

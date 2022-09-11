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
    name: "January",
    NewUsers: 590,
    Visits: 800,
    income: 140,
    reports: 4
  },
  {
    name: "February",
    NewUsers: 868,
    Visits: 967,
    income: 1506,
    reports: 590
  },
  {
    name: "March",
    NewUsers: 1397,
    Visits: 1098,
    income: 989,
    reports: 350
  },
  {
    name: "April",
    NewUsers: 1480,
    Visits: 1200,
    income: 1228,
    reports: 480
  },
  {
    name: "May",
    NewUsers: 1520,
    Visits: 1108,
    income: 1100,
    reports: 460
  },
  {
    name: "June",
    NewUsers: 680,
    Visits:345,
    income: 1700,
    reports: 380
  },
  {
    name: "July",
    NewUsers: 380,
    Visits:123,
    income: 1700,
    reports: 380
  },
  {
    name: "August",
    NewUsers: 230,
    Visits:123,
    income: 1700,
    reports: 380
  }
  ,
  {
    name: "September",
    NewUsers: 310,
    Visits:123,
    income: 1100,
    reports: 380
  }
  ,
  {
    name: "October",
    NewUsers: 680,
    Visits:123,
    income: 1700,
    reports: 380
  }
  ,
  {
    name: "November",
    NewUsers: 700,
    Visits:123,
    income: 1400,
    reports: 380
  }
  ,
  {
    name: "December",
    NewUsers: 980,
    Visits:123,
    income: 1600,
    reports: 380
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
      <Area type="monotone" dataKey="Visits" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="NewUsers" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="income" stroke="#ff7300" />
      <Scatter dataKey="reports" fill="red" />
    </ComposedChart>
  );
}

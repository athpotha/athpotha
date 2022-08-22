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
    
    Visits: 800,
  
  },
  {
    name: "Tuesday",
    
    Visits: 967,
    
  },
  {
    name: "Wednesday",
    
    Visits: 1098,
    
  },
  {
    name: "Thursday",
    
    Visits: 1200,
  
  },
  {
    name: "Friday",
  
    Visits: 1108,
   
  },
  {
    name: "Saturday",
   
    Visits:345,
   
  },
  {
    name: "Sunday",
    
    Visits:123,
    
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
      <Bar label="dd" dataKey="Visits" barSize={20} fill="#1F2F98" />
      {/* <Line type="monotone" dataKey="income" stroke="#ff7300" />
      <Scatter dataKey="reports" fill="red" /> */}
    </ComposedChart>
  );
}

import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
          month: "Mar",
          investment: 19,
          sell: 24,
          revenue: 10,
        },
        {
          month: "Apr",
          investment: 20,
          sell: 22,
          order: 24,
        },
        {
          month: "May",
          investment: 35,
          sell: 28,
          order: 29,
        },
        {
          month: "Jun",
          investment: 20,
          sell: 32,
          order: 32,
        },
        {
          month: "Jul",
          investment: 25,
          sell: 27,
          order: 30,
        },
        {
          month: "Aug",
          investment: 30,
          sell: 35,
          order: 39,
        },
      ];
    return (
        <div>
            <div className="p-8 charts-container">
      <h2 className="text-2xl font-bold text-center p-8">
        Its Our Website DeshBord.
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-center p-8">
            Investment Vs order
          </h3>
          <LineChart width={500} height={350} data={data}>
            <Line dataKey={"investment"}></Line>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"sell"}></YAxis>
            <Line dataKey={"order"}></Line>
          </LineChart>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center p-8">Sell Vs order</h3>
          <BarChart width={500} height={400} data={data}>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"investment"}></YAxis>
            <Bar dataKey={"order"} barSize={30} fill="#8884d8"></Bar>
            <Bar dataKey={"sell"} barSize={30} fill="#2ff3d3"></Bar>
          </BarChart>
        </div>
        </div>
        </div>
        </div>
    );
};

export default DashBoard;
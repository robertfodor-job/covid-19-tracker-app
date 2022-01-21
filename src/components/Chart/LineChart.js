import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const LineChart = ({ dailyData }) => {
  const chartData = {
    labels: dailyData.map(({ date }) => date),
    datasets: [
      {
        data: dailyData.map(({ confirmed }) => confirmed),
        label: 'Infected',
        borderColor: '#3333ff',
        fill: true,
      },
      {
        data: dailyData.map(({ deaths }) => deaths),
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },
    ],
  };

  return <Chart type="line" data={chartData} />;
};

export default LineChart;

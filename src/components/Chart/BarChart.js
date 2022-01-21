import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const BarChart = ({ confirmed, recovered, deaths, country }) => {
  const barData = {
    labels: ['Infected', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'People',
        backgroundColor: [
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
        ],
        data: [confirmed.value, recovered.value, deaths.value],
      },
    ],
  };

  const barOptions = {
    plugins: {
      legend: { display: false },
      title: { display: true, text: `Current state in ${country}` },
    },
  };

  // return <div></div>;
  return <Chart type="bar" data={barData} options={barOptions} />;
};

export default BarChart;

// const { confirmed, recovered, deaths } = covidData;
// console.log(covidData);

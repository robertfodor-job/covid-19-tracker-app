import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import Charts from 'chart.js/auto';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchData();
  });

  // const lineChart = dailyData.length ? (

  const data = {
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

  // ) : null;

  return (
    <div className={styles.container}>
      <Line data={data} />
    </div>
  );
};

export default Chart;

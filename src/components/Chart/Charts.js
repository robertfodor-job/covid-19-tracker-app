import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';

import LineChart from './LineChart';
import BarChart from './BarChart';

const Charts = ({ country, covidData }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchData();
  }, []);

  if (!covidData) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className={styles.container}>
        {country ? (
          <BarChart {...covidData} country={country} />
        ) : (
          <LineChart dailyData={dailyData} />
        )}
      </div>
    );
  }
};

export default Charts;

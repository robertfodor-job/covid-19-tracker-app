import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

const App = () => {
  const [covidData, setCovidData] = useState({});

  useEffect(() => {
    fetchData().then(res => {
      setCovidData(res);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Cards covidData={covidData} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;

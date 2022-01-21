import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

const App = () => {
  const [covidData, setCovidData] = useState({});
  const [country, setCountry] = useState('');

  const handleCountryChange = country => {
    fetchData(country).then(res => setCovidData(res));
    setCountry(country);
  };

  useEffect(() => {
    fetchData().then(res => {
      setCovidData(res);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Cards covidData={covidData} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart country={country} covidData={covidData} />
    </div>
  );
};

export default App;

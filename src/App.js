import React, { useEffect, useState } from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.jpg';

const App = () => {
  const [covidData, setCovidData] = useState({});
  const [country, setCountry] = useState('');

  const handleCountryChange = country => {
    fetchData(country).then(res => setCovidData(res));
    setCountry(country);
  };

  useEffect(() => {
    // fetchData().then(res => {
    //   setCovidData(res);
    // });

    const data = async () => {
      const response = await fetchData();
      setCovidData(response);
    };
    data();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards covidData={covidData} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts country={country} covidData={covidData} />
    </div>
  );
};

export default App;

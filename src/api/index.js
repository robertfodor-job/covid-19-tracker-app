import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async country => {
  let tempUrl = url;
  console.log(country);

  if (country) {
    tempUrl = `${url}/countries/${country}`;
  }

  try {
    // const response = await axios.get(url);
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(tempUrl);

    // const { confirmed, recovered, deaths, lastUpdate } = response.data;

    return { confirmed, recovered, deaths, lastUpdate };

    // return response;
  } catch (error) {
    throw new Error(error);
    // console.log();
  }
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);
    const { data } = response;

    const modifiedData = data.map(item => {
      return {
        confirmed: item.confirmed.total,
        deaths: item.deaths.total,
        date: item.reportDate,
      };
    });

    return modifiedData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    const {
      data: { countries },
    } = response;
    return countries.map(country => country.name);
  } catch (error) {
    throw new Error(error.message);
  }
};

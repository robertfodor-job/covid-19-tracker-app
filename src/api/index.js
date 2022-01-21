import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    // const response = await axios.get(url);
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

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

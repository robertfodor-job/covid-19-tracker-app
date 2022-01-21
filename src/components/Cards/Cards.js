import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';
// import cx from 'classNames';
import styles from './Cards.module.css';

const Cards = ({ covidData }) => {
  if (!covidData.confirmed) {
    return <h1>Loading...</h1>;
  } else {
    const { confirmed, recovered, deaths, lastUpdate } = covidData;

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={`${styles.card}, ${styles.infected}`}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={1.8}
                  separator=" "
                />
              </Typography>
              <Typography color="textSecondary" variant="h6">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases of Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={`${styles.card}, ${styles.recovered}`}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={1.8}
                  separator=" "
                />
              </Typography>
              <Typography color="textSecondary" variant="h6">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recoveries caused by Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={`${styles.card}, ${styles.deaths}`}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={1.8}
                  separator=" "
                />
              </Typography>
              <Typography color="textSecondary" variant="h6">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths caused by Covid-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Cards;
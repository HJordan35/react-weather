import React, { Component } from 'react';
import styles from './App.module.css';

//Components
import WeatherCard from './components/WeatherCard';

class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
        <div className={styles['desktop-container']}>
          <div className={styles['card-content']}>
            <section>
              <h1 className={styles['city-state']}>Dallas, TX</h1>
              <p className={styles['current-date']}>Saturday, Sep 16, 2018</p>
            </section>
            <WeatherCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

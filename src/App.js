import React, { Component } from 'react';
import styles from './App.module.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

//Components
import WeatherCard from './containers/WeatherCard';
import LeftCloud from './components/clouds/leftCloud';
import RightCloud from './components/clouds/rightCloud';

//FA Library
library.add(faMapMarkerAlt);

class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
        <div className={styles['desktop-container']}>
          <LeftCloud />
          <div className={styles['card-content']}>
            <section>
              <FontAwesomeIcon className={styles['fa-map-marker-alt']} icon="map-marker-alt" />
              <h1 className={styles['city-state']}>Dallas, TX</h1>
              <p className={styles['current-date']}>{moment().format('dddd, MMM DD, YYYY')}</p>
            </section>
            <WeatherCard />
          </div>
          <RightCloud />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import dallas from '../assets/Dallas.svg';
import styles from './WeatherCard.module.css';

//Components
import CurrentTemp from '../components/CurrentTemp/CurrentTemp';

class WeatherCard extends Component {

    componentDidMount() {
        this.props.getCurrentWeather('test', 'test');
    }

    render() {
        return (
            <div className={styles['weather-card']}>
                <CurrentTemp />
                <img src={dallas} className={styles['card-img']} alt="Card cap" />

                {/* TEMPERATURE TILES */}
                <div className={styles['temp-tile-container']}>
                    <div className={styles['temp-tile']}></div>
                    <div className={styles['temp-tile']}></div>
                    <div className={styles['temp-tile']}></div>
                    <div className={styles['temp-tile']}></div>
                    <div className={styles['temp-tile']}></div>
                </div>
            </div>
        )
    }
}

export default WeatherCard;
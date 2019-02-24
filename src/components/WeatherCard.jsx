import React, { Component } from 'react';
import dallas from '../assets/Dallas.svg';
import styles from './WeatherCard.module.css';

//Components
import CurrentTemp from '../components/CurrentTemp/CurrentTemp';
import ForecastTile from './ForecastTile/ForecastTile';

class WeatherCard extends Component {

    componentDidMount() {
        this.props.getCurrentWeather('test', 'test');
        this.props.getForecastWeather('test', 'test');
    }

    render() {
        return (
            
            <div className={styles['weather-card']}>
                <CurrentTemp />
                <img src={dallas} className={styles['card-img']} alt="Card cap" />

                {/* TEMPERATURE TILES */}
                <div className={styles['temp-tile-container']}>
                    <ForecastTile />
                    <ForecastTile />
                    <ForecastTile />
                    <ForecastTile />
                    <ForecastTile />
                </div>
            </div>
        )
    }
}

export default WeatherCard;
import React, { Component } from 'react';
import dallas from '../assets/Dallas.svg';
import mobileBackground from '../assets/mobileBackground.svg';
import styles from './WeatherCard.module.css';

//Components
import CurrentTemp from '../components/CurrentTemp/CurrentTemp';
import ForecastTile from './ForecastTile/ForecastTile';
import ToggleTemp from './ToggleTemp/ToggleTemp';

class WeatherCard extends Component {
    constructor() {
        super();
        this.state = { isFahrenheit: true };
    }
    componentDidMount() {
        this.props.getCurrentWeather('test', 'test');
        this.props.getForecastWeather('test', 'test');
    }

    renderTiles() {
        let tiles = [];
        if (this.props.forecastData && this.props.forecastDates) {
            for (let i=0; i<5; i++) {
                tiles.push(<ForecastTile 
                    weatherDate={this.props.forecastDates[i]}
                    weatherData={this.props.forecastData[i]} 
                    isFahrenheit={this.state.isFahrenheit}/>)
            }
        }
        return tiles;
    }

    toggleTempTypeHandler = (checked) => {
        this.setState({isFahrenheit: checked});
    }

    render() {
        let forecastTiles = this.renderTiles();
        return (
            <div className={styles['weather-card']}>
                <div className={styles['current-temp-row']}>
                    <div className={styles['mobile-toggle']}><ToggleTemp onChange={this.toggleTempTypeHandler} isFahrenheit={this.state.isFahrenheit}/></div>
                    <CurrentTemp currentWeather={this.props.currentWeather} isFahrenheit={this.state.isFahrenheit}/>
                    <div className={styles['desktop-toggle']}><ToggleTemp onChange={this.toggleTempTypeHandler} isFahrenheit={this.state.isFahrenheit}/></div>
                </div>
                <img src={dallas} className={styles['card-img']} alt="Card cap" />
                <img src={mobileBackground} className={styles['mobile-img']} alt="Card cap" />
                {/* TEMPERATURE TILES */}
                <div className={styles['temp-tile-container']}>
                    {forecastTiles}
                </div>
            </div>
        )
    }
}

export default WeatherCard;
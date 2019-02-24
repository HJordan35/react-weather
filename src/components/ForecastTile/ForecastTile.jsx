import React, { PureComponent } from 'react';
import moment from 'moment';

// Assets
import drizzleSvg from '../../assets/drizzle.svg';
import partCloudySvg from '../../assets/part-cloudy.svg';
import rainSvg from '../../assets/rain.svg';
import thunderSvg from '../../assets/rain.svg';

import * as codes from '../../utilities/ComponentConstants';
import styles from './ForecastTile.module.css';

class ForecastTile extends PureComponent {
    setWeatherState() {
        let { weatherData } = this.props;
        let icon;
        switch (true) {
            case (weatherData.id >= codes.ATMOSPHERE_CODE):
                icon = <img src={partCloudySvg} className={styles['type-img']} alt="Card cap" />;
                break;
            case (weatherData.id >= codes.RAIN_CODE):
                icon = <img src={rainSvg} className={styles['type-img']} alt="Card cap" />;
                break;
            case (weatherData.id >= codes.DRIZZLE_CODE):
                icon = <img src={drizzleSvg} className={styles['type-img']} alt="Card cap" />;
                break;
            case (weatherData.id >= codes.THUNDER_CODE):
                icon = <img src={thunderSvg} className={styles['type-img']} alt="Card cap" />;
                break;
            default:
                break;
        }
        return icon;
    }

    render() {
        let { weatherData, weatherDate } = this.props;
        let weatherStatus = this.setWeatherState();
        return (
            <React.Fragment>
                {this.props.weatherData && (
                    <div className={styles['temp-tile']}>
                        <p className={styles['tile-day']}>{moment.unix(weatherDate).format('ddd')}</p>
                        {weatherStatus}
                        <p className={styles['tile-temp']}>{weatherData.tempFahrenheit}&#176;</p>
                    </div>)
                }
            </React.Fragment>

        )
    }
}

export default ForecastTile;
import React, { PureComponent } from 'react';

import styles from './ForecastTile.module.css';

class ForecastTile extends PureComponent {
    render() {
        return (
            <React.Fragment>
                {this.props.weatherData && (
                    <div className={styles['temp-tile']}>
                        <p>{this.props.weatherData.tempFahrenheit}</p>
                    </div>)
                }
            </React.Fragment>

        )
    }
}

export default ForecastTile;
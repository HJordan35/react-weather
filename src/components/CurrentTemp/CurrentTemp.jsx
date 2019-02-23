import React, { PureComponent } from 'react';
import styles from './CurrentTemp.module.css';

import partCloudySvg from '../../assets/part-cloudy.svg';

class CurrentTemp extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className={styles['temp-container']}>
                    <span>65</span>
                    <span className={styles['degree-symbol']}>&#176;</span>
                    <img src={partCloudySvg} className={styles['type-img']} alt="Card cap" />
                    <div className={styles['status-wind-container']}>
                        <p className={styles['status-wind']}>Partly Cloudy</p>
                        <p className={styles['status-wind']}>12 mph</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CurrentTemp;
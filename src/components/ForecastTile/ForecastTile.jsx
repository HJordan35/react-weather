import React, {PureComponent} from 'react';

import styles from './ForecastTile.module.css';

class ForecastTile extends PureComponent {
    render() {
        return(
            <div className={styles['temp-tile']}></div>
        )
    }
}

export default ForecastTile;